---
sidebar_position: 2
title: Implementing Multi-Factor Authentication
description: Step-by-step guide to add MFA to your application
---

:::info Time & Difficulty
**Time to complete:** 15-20 minutes 

**Difficulty:** Intermediate
:::

## Overview

Multi-factor authentication (MFA) adds an extra layer of security by requiring users to verify their identity using two or more authentication factors. This guide shows you how to implement MFA in your application using Protekt.

### What You'll Learn

- Enable MFA for your Protekt application
- Configure different MFA methods (SMS, TOTP, email)
- Handle MFA challenges in your application code
- Implement backup codes for account recovery

## Prerequisites

Before starting, ensure you have:

- A Protekt account with an application configured
- Basic authentication already implemented (see [Quickstart](/docs/getting-started/intro.md))
- Protekt SDK installed in your project

## Step 1: Enable MFA in Dashboard

First, enable MFA for your application through the Protekt Dashboard:

1. Navigate to **Applications → [Your App] → Authentication**
2. Scroll to the **Multi-Factor Authentication** section
3. Toggle **Enable MFA** to ON
4. Select your preferred MFA methods

### Available MFA Methods

- **SMS** - Send verification codes via text message
  - *Best for: Consumer apps with phone verification*
- **TOTP** - Time-based one-time passwords (Google Authenticator, Authy)
  - *Best for: Security-conscious users and enterprises*
- **Email** - Send verification codes via email
  - *Best for: Quick setup without phone numbers*

## Step 2: Handle MFA Enrollment

When MFA is enabled, users need to enroll at least one MFA method. Here's how to prompt enrollment:

```javascript title="src/auth.js"
import { protekt } from '@protekt/sdk';

// After successful login, check if user needs MFA enrollment
async function handleLogin(email, password) {
  try {
    const result = await protekt.auth.login({ email, password });
    
    if (result.mfaRequired && !result.user.mfaEnrolled) {
      // User needs to enroll in MFA
      redirectToMFAEnrollment();
    } else if (result.mfaRequired) {
      // User needs to complete MFA challenge
      redirectToMFAChallenge(result.challengeId);
    } else {
      // Login successful
      setUserSession(result.tokens);
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
}
```

## Step 3: Implement TOTP Enrollment

For authenticator app enrollment, generate a QR code that users can scan:

```javascript title="src/mfa-enrollment.js"
async function enrollTOTP() {
  // Generate TOTP secret and QR code
  const enrollment = await protekt.mfa.enrollTOTP();
  
  // enrollment contains:
  // - secret: Manual entry code
  // - qrCodeUrl: URL to QR code image
  // - backupCodes: Array of recovery codes
  
  displayQRCode(enrollment.qrCodeUrl);
  displayBackupCodes(enrollment.backupCodes);
  
  // User scans QR code and enters verification code
  const verificationCode = await getUserInput();
  
  // Verify and complete enrollment
  await protekt.mfa.verifyTOTP({
    enrollmentId: enrollment.id,
    code: verificationCode
  });
  
  console.log('MFA enrollment successful!');
}
```

:::warning Important
Always display and encourage users to save backup codes. These are essential for account recovery if they lose access to their MFA device.
:::

## Step 4: Verify MFA Challenges

When a user with MFA enabled logs in, they'll receive a challenge:

```javascript title="src/mfa-challenge.js"
async function completeMFAChallenge(challengeId) {
  // Prompt user for MFA code
  const mfaCode = await promptUserForCode();
  
  try {
    const result = await protekt.mfa.verifyChallenge({
      challengeId: challengeId,
      code: mfaCode
    });
    
    // MFA verified, complete login
    setUserSession(result.tokens);
    redirectToDashboard();
    
  } catch (error) {
    if (error.code === 'INVALID_CODE') {
      showError('Invalid verification code. Please try again.');
    } else if (error.code === 'CHALLENGE_EXPIRED') {
      showError('Challenge expired. Please log in again.');
    }
  }
}
```

## Step 5: Implement SMS MFA (Optional)

SMS MFA requires users to verify their phone number first:

```javascript title="src/sms-enrollment.js"
async function enrollSMS(phoneNumber) {
  // Request SMS code
  const enrollment = await protekt.mfa.enrollSMS({
    phoneNumber: phoneNumber
  });
  
  // User receives SMS, enters code
  const verificationCode = await getUserInput();
  
  // Verify phone and complete enrollment
  await protekt.mfa.verifySMS({
    enrollmentId: enrollment.id,
    code: verificationCode
  });
  
  console.log('SMS MFA enrollment successful!');
}
```

## Step 6: Manage Backup Codes

Backup codes provide account recovery when users lose access to their MFA device:

```javascript title="src/backup-codes.js"
// User can use backup code instead of MFA
async function useBackupCode(challengeId, backupCode) {
  const result = await protekt.mfa.verifyBackupCode({
    challengeId: challengeId,
    code: backupCode
  });
  
  // Warning: This backup code is now consumed
  setUserSession(result.tokens);
}

// Generate new backup codes
async function regenerateBackupCodes() {
  const codes = await protekt.mfa.regenerateBackupCodes();
  
  // Display codes to user and prompt them to save
  displayBackupCodes(codes);
}
```

:::danger Security Note
Each backup code can only be used once. After a user uses a backup code, prompt them to regenerate new codes.
:::

## Testing Your Implementation

Before going to production, test these scenarios:

- [ ] New user can enroll in MFA during first login
- [ ] Existing user can add MFA from account settings
- [ ] User can successfully complete MFA challenge with TOTP
- [ ] User can use backup code when MFA device unavailable
- [ ] Invalid codes show appropriate error messages
- [ ] User can disable MFA from account settings (optional)

## Best Practices

### ✅ Do

- Offer multiple MFA methods for user flexibility
- Always provide backup codes and encourage users to save them
- Allow users to regenerate backup codes
- Make MFA enrollment optional but strongly recommended
- Provide clear instructions and help documentation

### ❌ Don't

- Force MFA enrollment without explanation
- Allow users to proceed without saving backup codes
- Store MFA secrets or backup codes in plain text
- Implement rate limiting without clear error messages
- Skip testing account recovery flows

## Troubleshooting

### User reports "Invalid code" errors

This is usually caused by time sync issues with TOTP. Check:
- User's device time is correctly synced
- Time zone settings are correct
- Code is entered quickly (TOTP codes expire every 30 seconds)

### SMS codes not arriving

Check your SMS provider configuration in the Protekt Dashboard under Settings → SMS Provider. Verify credits and rate limits.

### User locked out of account

Users should use backup codes. If backup codes are unavailable, admins can disable MFA for the user through the Dashboard under Users → [User] → Security.

## Next Steps

<div class="button-container">
  <a href="/docs/guides/mfa-policies" class="button button--secondary">
    Configure MFA Policies →
  </a>
  <a href="/docs/guides/security-best-practices" class="button button--secondary">
    Security Best Practices →
  </a>
</div>

:::tip Need Help?
Check our [MFA FAQ](/docs/troubleshooting/mfa-faq) or reach out to support@protekt.dev
:::
