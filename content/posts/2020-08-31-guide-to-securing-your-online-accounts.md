---
template: post
slug: cybersecurity-guide
draft: false
socialImage: /media/yubikey.jpg
title: Guide to Securing Your Online Accounts
date: 2020-09-08T03:58:00.000Z
description: I provide actionable steps for drastically improving your online security.
category: Cybersecurity
tags:
  - Cybersecurity
---
Estimates report that cyber-crime damages are projected to hit $6 trillion dollars by 2021. During the current pandemic and the worldwide shift towards adopting technology, cyber-security is more important than ever! In this guide, I'll walk you through actionable steps for substantially improving your online security. [Summary at the end!](#summary)

## Have you been pwned?

Thanks to security expert Troy Hunt and his website [Have I Been Pwned](https://haveibeenpwned.com/), you can easily check if any accounts associated with your email have been exposed in known data breaches.

* Navigate to [haveibeenpwned.com](https://haveibeenpwned.com/)
* Enter your email and see if you have been pwned!

If you have been pwned, your information is out there and attackers can use it to do harm. Nevertheless, your best course of action is to stay calm and continue to follow the rest of this guide - either remediating the damage or preventing it. I highly recommend you sign up for the notification service from HaveIBeenPwned for notifications should any of your accounts be discovered compromised.

## Passwords

If you found any compromised accounts using the first step, immediately change the passwords of those accounts.

Now, you might be wondering what constitutes a good password. The two most important rules to follow are to ***never reuse passwords*** and to always ***use unique, strong passwords***.

The best passwords are long, using a mix of characters, hard to guess, and hard to crack. Aim to create passwords that are ***alphanumeric*** and at least ***16 characters long***. Some people create their own systems for generating passwords, using the combination of a secret phrase and the website name. The problem with such password algorithms is that they are either too simple to provide the protection you really need or too complex to the point they become a pain to use.

The solution is to ***use a password manager*** that will randomly generate secure passwords and safely store them. Using a password manager allows you to only remember one password. The password manager will encrypt a database of your account passwords, secured by your master password.

From my research, I recommend using [Bitwarden](https://bitwarden.com/) due to its free, open source nature. There are many alternatives to look into, such as LastPass, so please feel free to do your own research on various password managers to see if they meet your security, convenience, and pricing requirements. If you are not comfortable with having your passwords stored on the cloud in an encrypted database, you can look into using KeePass - which is a completely offline password manager. However, doing so would sacrifice convenience and could cause you to deviate from using the manager, defeating its purpose. Even if a cloud based password manager is hacked, your data is generally safe because the company does not have your encryption key (your password is required).

Using a password manager, it's incredibly important to choose a new password that is hard to guess or crack. If the master password is compromised, your entire list of passwords can be compromised so please put some time into deciding your master password. Moreover, if you forget your master password, you may be locked out of your password manager causing you to lose all your passwords.

After you've setup the password manager, use the built in password generation to change and store your passwords. Keep your master password, email passwords, and computer passwords out of the password manager. This is a laborious process, but you should only have to remember 3-4 strong passwords when you are done. If you are a Google user, you can go ahead and remove your passwords from the [Google password manager](https://passwords.google.com/) since you don't want all your passwords to be compromised if someone accesses your email. For further improved security, consider changing your passwords periodically.

## 2 Factor Authentication

The next step to securing your accounts is to utilize 2 factor authentication - an extra layer of security beyond your username and password. 2FA methods include text message or phone call, email, authenticator apps, and hardware security keys.

Phone based 2FA, such as text or calls, are not safe due to phishing and SIM swapping exploits, where an attacker will call your carrier convincing them to swap your number over to a SIM card they own. If this is a concern, you can look into setting up a PIN or pass-code with your carrier to help protect yourself from social engineering.

Email 2FA is also problematic because it can be accessed from anywhere and would only require 1 factor to be compromised. Since both password resets and 2FA would go to your email, your accounts would be easily compromised if someone gained access to your email.

Authenticator apps are a much safer option for 2FA since a hacker would need to gain physical access to your phone or authenticator app to generate a 2FA code. One of the most common authenticators is Google Authenticator, but I would caution that this app has no backup or sync functionality meaning you would lose everything if you lost your device (barring any recovery codes you might have). For this purpose, I would recommend using either Authy or Microsoft Authenticator since they have backup functionalities. My absolute favorite authenticator is the Yubico Authenticator, which requires a YubiKey - a hardware security key.

Hardware security keys, such as the YubiKey or Google's Titan Keys, are the safest method of 2FA. These are physical security keys that provide a code and can only be compromised if they are physically stolen from you. They can be used with many popular websites and password managers. You should definitely look into setting up your hardware security keys as 2FA with your password manager - even if you'd have to upgrade to a premium plan. ***You should have two hardware keys*** in case you break or lose one of them. Having a backup is important so you don't find yourself locked out of your accounts.

If you are serious about your security, I recommend you purchase a [2 pack of the YubiKey 5 NFC](https://www.yubico.com/product/yubikey-5-nfc-pack-of-2) as they will work with both your mobile device and computer. Moreover, it will allow you to use the [Yubico Authenticator](https://www.yubico.com/products/services-software/download/yubico-authenticator/) for websites where hardware security keys are not supported yet. The 2FA codes will be living offline on the physical devices, impenetrable by hackers. The investment into your security can prevent massive headache and loss later down the line.

[![YubiKey 5 NFC](/media/yubikey.jpg "YubiKey 5 NFC")](https://www.yubico.com/product/yubikey-5-nfc-pack-of-2)

You should use 2FA, preferably with security keys, wherever possible to keep your accounts protected.

## Protecting Your Email

Securing your email is extremely important since gaining access to your email would effectively give access to all associated accounts via password resets. If you are using gmail, I highly recommend you use your 2 hardware security keys from earlier to join [Google's advanced protection program](https://landing.google.com/advancedprotection/). Now, gaining access to your email would require your hardware security key making it virtually impossible for anyone but you to access your account. The drawback is that if you lose both keys, you will be locked out of your gmail for a few days until Google can verify the account belongs to you. I encourage you to setup the best 2FA option your email service provider offers.

Moreover, a good security practice is to create a second email address that you never share with anyone. You will use this account privately for financial or sensitive accounts. You can also use this email for your password manager setup. Doing this makes you a much harder target for hackers since your financial account email addresses will not be publicly known. For your second account, I would recommend to create another gmail account setup with the advanced protection program. You can also look into the Swiss based ProtonMail if privacy is extremely important to you, but they do not natively support hardware keys yet.

## Financial Information

If you have used credit before the Equifax breach, your SSN and personal information is likely out there somewhere. You can check if you were impacted by the Equifax breach by following the instructions [here on the FTC gov website](https://www.ftc.gov/enforcement/cases-proceedings/refunds/equifax-data-breach-settlement#FAQ10). If you have no immediate plans to use your credit, you should freeze your credit with the 3 major credit bureaus (Equifax, Experian, and Transunion) to help protect yourself from identity theft. If you need to use your credit after freezing, you can unfreeze it just as easily.

Regarding payment cards, spending on credit cards should be preferred to spending on debit cards because credit cards generally have better protections. Moreover, you should consider setting up monitoring on your credit cards to receive text messages whenever there is a purchase made. This can help you catch fraudulent transactions in real time.

For preventing social engineering, you can also consider setting up a challenge or required response for phone calls with your bank. Furthermore, choose security questions that cannot easily be discovered by searching you online.

## General Device Security

For your mobile device, ensure you have setup authentication (face ID, fingerprint, passcode, pattern, etc) for device access and for each of your financial / sensitive applications. You should also only install applications from trusted sources.

For PCs, be careful about websites you visit and files you download. Moreover, you should use an anti-virus software such as Windows Defender, BitDefender, Avira, or Malwarebytes.

Watch out for phishing scams when browsing the web or checking emails. If you get a suspicious email, check the exact sender address and why it came for a clue. Be careful not to click any links or download any attachments if you suspect an email for phishing.\
In short, when browsing the web and you feel suspicion, check the web url for spoofing and check if the site has HTTPS enabled. Keep in mind that many phishing websites now have SSL / HTTPS enabled, so you must carefully check the urls.

Moreover, keep in mind that using public WiFi opens you up to security exploits when you browse on non-secure websites (no SSL/TLS/HTTPS). To help prevent data interception and gain peace of mind when using public WiFi, consider using a VPN. A VPN is a virtual private network that encrypts and masks your data as it moves from one place to another. Additionally, you can install a web browser extension called [HTTPS Everywhere](https://www.eff.org/https-everywhere) that will automatically switch thousands of websites from an insecure "http" connection to a secure "https" connection.

Lastly, keep your software updated and your data backed up.

## Summary

1. Check if you have been pwned and setup notifications with [HaveIBeenPwned](https://haveibeenpwned.com/).
2. Get a pair of hardware security keys (the extra will be a backup).
3. Create a private email address for financial/sensitive purposes. Setup the advanced protection program if you are using gmail.
4. Setup a password manager such as Bitwarden. Setup your hardware security keys as 2FA if you can get Bitwarden premium or if your password manager allows it.
5. Use the password manager to generate and store new passwords for all of your accounts except your emails, computer password, and password manager itself.
6. Setup your private email address with any financial/sensitive accounts (banks, brokerages, credit bureaus, password managers, etc).
7. Turn on 2FA wherever possible, preferably using hardware security keys. Consider adding login alerts as well.
8. Turn on notification alerts for any credit card or bank transactions, as well as credit changes.
9. Ensure your mobile device and financial apps have some form of authentication for increased security.
10. Consider freezing your credit to help protect yourself from identity theft.
11. Use anti-virus and keep your software up to date.
12. Learn to avoid phishing.

The key ideas in the guide are using a password manager with security keys, 2FA, protecting your email addresses (advanced protection program for gmail), and setting up monitoring for your accounts. Remember, while it may be impossible to make you unhackable, the goal is to improve your security to the point that potential attackers will give up and move on to the next target. I hope you found this guide useful!