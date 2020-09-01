---
template: post
title: Guide to Securing Your Online Accounts
slug: cybersecurity-guide
draft: false
date: 2020-08-31T03:58:32.882Z
description: I provide actionable steps for drastically improving your online security.
category: Cybersecurity
tags:
  - Cybersecurity
---
Estimates report that cyber-crime damages are projected to hit $6 trillion dollars by 2021. During the current pandemic and the worldwide shift towards adopting technology, cyber-security is more important than ever!

## Have you been pwned?

Thanks to security expert Troy Hunt and his website [Have I Been Pwned](https://haveibeenpwned.com/), you can easily check if any accounts associated with your email have been exposed in known data breaches.

* Navigate to [haveibeenpwned.com](https://haveibeenpwned.com/)
* Enter your email and see if you have been pwned!

If you have been pwned, your information is out there and attackers can use it to do harm. Nevertheless, your best course of action is to stay calm and continue to follow the rest of this guide - either remediating the damage or preventing it. I highly recommend you sign up for the notification service from HaveIBeenPwned for notifications should any of your accounts be discovered compromised.

## Passwords

If you found any compromised accounts using the first step, immediately change the passwords of those accounts.

Now, you might be wondering what constitutes a good password. The two most important rules to follow are to ***never reuse passwords*** and to always ***use unique, strong passwords***.

The best passwords are long, using a mix of characters, hard to guess, and hard to crack. Some people create their own systems for generating passwords, using the combination of a secret phrase and the website name. The problem with such password algorithms is that they are either too simple to provide the protection you really need or too complex to the point they become a pain to use.

The solution is to ***use a password manager*** that will randomly generate secure passwords and safely store them. Using a password manager allows you to only remember one password. The password manager will encrypt a database of your account passwords, secured by your master password.

From my research, I recommend using [Bitwarden](https://bitwarden.com/) due to its free, open source nature. There are many alternatives to look into, such as LastPass, so please feel free to do your own research on various password managers to see if they meet your security, convenience, and pricing requirements. If you are not comfortable with having your passwords stored on the cloud in an encrypted database, you can look into using KeePass - which is a completely offline password manager. However, doing so would sacrifice convenience and could cause you to deviate from using the manager, defeating its purpose. Even if a cloud based password manager is hacked, your data is generally safe because the company does not have your encryption key (your password is required).

Using a password manager, it's incredibly important to choose a new password that is hard to guess or crack. If the master password is compromised, your entire list of passwords can be compromised so please put some time into deciding your master password. Moreover, if you forget your master password, you may be locked out of your password manager causing you to lose all your passwords.

After you've setup the password manager, use the built in password generation to change and store your passwords. Keep your master password, email passwords, and computer passwords out of the password manager. When you are done, you should only have to remember 3-4 unique, strong passwords. If you are a Google user, you can go ahead and remove your passwords from the [Google password manager](https://passwords.google.com/) since you don't want all your passwords to be compromised if someone accesses your email.

## 2 Factor Authentication

The next step to securing your accounts is to utilize 2 factor authentication - an extra layer of security beyond your username and password. 2FA methods include text message or phone call, email, authenticator apps, and hardware security keys.

Phone based 2FA, such as text or calls, are not safe due to phishing and SIM swapping exploits, where an attacker will call your carrier convincing them to swap your number over to a SIM card they own. If this is a concern, you can look into setting up a PIN or pass-code with your carrier that will need to be repeated when you speak to a representative.

Email 2FA is also problematic because it can be accessed from anywhere and would only require 1 factor to be compromised. Since both password resets and 2FA would go to your email, your accounts would be easily compromised if someone gained access to your email.

Authenticator apps are a much safer option for 2FA since a hacker would need to gain physical access to your phone or authenticator app to generate a 2FA code. One of the most common authenticators is Google Authenticator, but I would caution that this app has no backup or sync functionality meaning you would lose everything if you lost your device (barring any recovery codes you might have). For this purpose, I would recommend either using Authy or Microsoft Authenticator. My absolute favorite authenticator is the Yubico Authenticator, which requires a YubiKey - a hardware security key.

Hardware security keys, such as the YubiKey or Google's Titan Keys, are the safest method of 2FA. These are physical security keys that provide a code and can only be compromised if they are physically stolen from you. They can be used with many popular websites and password managers. You should definitely look into setting up your hardware security keys as 2FA with your password manager - even if you'd have to upgrade to a premium plan. ***You should have two hardware keys*** in case you break or lose one of them. Having a backup is important so you don't find yourself locked out of your accounts.

If you are serious about your security, I recommend you purchase a [2 pack of the YubiKey 5 NFC](https://www.yubico.com/product/yubikey-5-nfc-pack-of-2) as they will work with both your mobile device and computer. Moreover, it will allow you to use the [Yubico Authenticator](https://www.yubico.com/products/services-software/download/yubico-authenticator/) for websites where hardware security keys are not supported yet. The 2FA codes will be living offline on the physical devices, impenetrable by hackers. These investments into your security can prevent massive headache and loss later down the line.

[![YubiKey 5 NFC](/media/yubikey.jpg "YubiKey 5 NFC")](https://www.yubico.com/product/yubikey-5-nfc-pack-of-2)

## Protecting Your Email

Securing your email is extremely important since gaining access to your email would effectively give access to all associated accounts via password resets. If you are using gmail, I highly recommend you use your 2 YubiKeys from earlier to join [Google's advanced protection program](https://landing.google.com/advancedprotection/). Now, gaining access to your email would require your hardware security key making it virtually impossible for anyone but you to access your account. The drawback is that if you lose both keys, you will be locked out of your gmail for a few days until Google can verify the account belongs to you.

Moreover, a good security practice is to create a second email address that you never share with anyone. You will use this account privately for financial or sensitive accounts. Doing this makes you a much harder target for hackers since your financial account emails will not be publicly known. For your second account, I would recommend to create another gmail account setup with the advanced protection program. You can also look into the Swiss based ProtonMail if privacy is extremely important to you, but they do not natively support hardware keys yet.