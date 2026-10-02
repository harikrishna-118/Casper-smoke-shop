# 👻 Casper Smoke Shop — Modern Interactive E-Commerce Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Age Verification](https://img.shields.io/badge/Age%20Verification-21%2B-purple.svg)](#-21-age-verification-gate)
[![Status](https://img.shields.io/badge/Status-Fully%20Functional-brightgreen.svg)](#-features--interactive-logic-flows)

A high-performance, fully functional e-commerce web application for **Casper Smoke Shop** (premium vapes, e-liquids, glass water pipes, concentrates, and smoking accessories). Built with modern HTML5, CSS3, and vanilla JavaScript (zero heavy framework overhead) for ultra-fast load times and smooth client-side interactions.

---

## 🌟 Features & Interactive Logic Flows

### 🛒 1. Full E-Commerce Cart Engine & Slide-Over Drawer
- **Real-Time Badge Updates**: Cart item counter updates live across header and mobile navigation.
- **Product Actions**: Clicking any product CTA opens the slide-over Cart Drawer, adds product variants, and displays floating toast notifications.
- **Cart Drawer Controls**:
  - Quantity adjusters (`+` / `-`) and instant item removal.
  - **Free Shipping Progress Bar**: Calculates remaining subtotal needed to unlock **FREE SHIPPING** on orders $49+.
  - **Interactive Checkout Trigger**: Launches express multi-step checkout.

### 🛍️ 2. Product Quick View & Customization Modal
- **Variant Options**: Interactive **Flavor Chips** (*Purple Rush, Lime Chill, Blue Ice*) and **Nicotine Strength Chips** (*50mg, 20mg, 0mg*).
- **Product Details**: Displays high-res product artwork, star ratings, stock badges, and detailed descriptions.

### 💳 3. Multi-Step Express Checkout System
- **Contact & Shipping Form**: Address, email, and discreet delivery details.
- **Discount Code Engine**: Supports coupon code **`CASPER20`** for an instant 20% discount on the order subtotal.
- **Order Summary**: Real-time breakdown of subtotal, 20% discount, shipping fees, tax, and final total.
- **Order Confirmation**: Generates a unique order number (e.g. `CSP-84920`) with tracking information and clears the active cart.

### 👤 4. User Account & VIP Member System
- **Sign In & Register Modal**: Seamless tab toggling between Login and Create Account.
- **Session Persistence**: Stores user login state in `localStorage`.
- **VIP Dashboard**: Shows member status, reward points, and single-click Sign Out.

### 🔍 5. Real-Time Autocomplete Search Dropdown
- Matches queries live against the product catalog as the user types in the header search bar or mobile menu search.
- Displays thumbnail previews, title, category, price, and direct Quick View triggers.

### 📦 6. Real-Time Order Tracking Modal
- Input Order # and Email to view shipment tracking timelines (*USPS Priority Mail - Out for Delivery Today* in discreet packaging).

### ❓ 7. Interactive FAQ Accordion
- Accordion questions & answers covering 21+ Age Verification, discrete packaging, shipping speeds, and return policies.

### ✉️ 8. Contact Us & Wholesale / B2B Application Modals
- **Contact Form**: Direct customer inquiry submission with instant success feedback.
- **Wholesale / B2B Application**: Business application form with Resale Tax ID, Email, and Company Name.

### 🌗 9. Light & Dark Theme System
- Instant theme toggling between dark neon (`#0a0a0c`) and clean light mode (`#f8f9fa`).
- Automatically remembers user theme preferences in `localStorage`.

### 🛡️ 10. 21+ Age Verification Gate
- Compliance overlay checking visitor age (21+). Sets `casper_age_passed=1` in `document.cookie` and `localStorage`.

---

## 📁 Project Structure

```
CasperSmokeShop/
├── index.html              # Main HTML markup with drawers, headers, and footers
├── styles.css              # Custom styling, dark/light theme tokens, and modal system
├── app.js                  # Client application engine, cart state, modals, & search
├── casper-mascot-logo.png  # Official Casper Smoke Shop mascot logo
└── README.md               # Project documentation
```

---

## ⚡ Quick Start / Local Development

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Zaheer2801/CasperSmokeShop.git
   cd CasperSmokeShop
   ```

2. **Launch a Local Server**:
   ```bash
   # Using Python 3
   python3 -m http.server 8088
   ```

3. **Open in Browser**:
   Navigate to `http://localhost:8088` in your web browser.

---

## 📜 License & Compliance Notice

This project is licensed under the MIT License. 

> **21+ Notice**: All products featured on Casper Smoke Shop are intended solely for adult consumers aged 21 years or older in compliance with applicable federal and local regulations.
