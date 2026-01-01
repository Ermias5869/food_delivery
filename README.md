# 📱 HelloFood – Online Food Delivery Application

**Flutter Frontend • Node.js Backend • MongoDB Database**

---

## 1. Introduction

### 1.1 Overview

HelloFood is a mobile-based online food delivery application designed to simplify food ordering through a modern, intuitive interface. The app allows users to browse food categories, view popular foods, see detailed food information, manage favorites and cart items, and place orders securely.

The application is developed using Flutter for cross-platform mobile development, Node.js with Express for backend services, and MongoDB for cloud-based data storage.

### 1.2 Objectives

The main objectives of HelloFood are to:

- Provide a simple and user-friendly food ordering experience
- Allow users to browse food by category and popularity
- Enable cart and favorite food management
- Ensure secure user authentication
- Support future scalability and feature expansion

---

## 2. Application Features

### 2.1 User Authentication

- User registration using name, email, phone number, and password
- Secure login using email and password
- Password reset functionality
- Only authenticated users can access protected features (addToCart, addReview, addFavorite)

### 2.2 Food Browsing

- Browse foods by categories (Burger, Pizza, Cake, Ice Cream, etc.)
- View popular and special-offer foods
- Dynamic loading of food items per category

### 2.3 Food Details

- View food description, ingredients, price, and reviews
- Add food items to cart
- Add or remove food from favorites

### 2.4 Cart & Favorites

- Add, remove, and update food quantities in cart
- View total cost including delivery and tax
- Save favorite foods for later access

---

## 3. System Architecture

### 3.1 Architecture Overview

HelloFood follows a client–server architecture:

- **Frontend:** Flutter mobile application
- **Backend:** Node.js with Express REST API
- **Database:** MongoDB Atlas (cloud-based)
- **Communication:** REST APIs using JSON
- **Authentication:** JWT (JSON Web Token)

---

## 4. Project Structure (Summary)

### 4.1 Frontend (Flutter)

```

lib/
├── models/ // Data models
├── pages/ // UI screens
├── services/ // API & business logic
├── widgets/ // Reusable UI components
└── main.dart // App entry point

```

### 4.2 Backend (Node.js)

```

server/
├── models/ // Database schemas
├── controllers/ // Business logic
├── routes/ // API routes
├── middleware/ // Authentication & security
├── utils/ // Helper functions
└── server.js // Server entry point

```

---

## 📘 Food Delivery Application – Usage Guide

### How to Run the Application

#### Prerequisites

- Flutter SDK installed
- Android Emulator or physical Android device

#### Steps

1. Open Terminal / Command Prompt
2. Navigate to the project directory:

```bash
cd food_delivery
```

3. Run the application using:

```bash
flutter run
```

4. The application will launch on the connected emulator or physical device.

---

### 2. Sign In and Sign Up

#### 2.1 Sign In

- When the app starts, the Sign In page is displayed.
- If the user already has an account:

  - Enter Email and Password
  - Click the Sign In button
  - The user is redirected to the Home Page

#### 2.2 Sign Up (New User)

- If the user is new:

  - Click the Sign Up button below the Sign In page
  - Fill in the required information:

    - Name
    - Email
    - Phone Number
    - Password
    - Confirm Password

  - After successful registration, the user is redirected to the Home Page

---

### 3. Home Page Navigation

- The Home Page displays:

  - Food categories
  - Popular foods
  - Special offer foods

- Users can search for food using the search bar
- Users can tap on a category to view different types of foods under that category

---

### 4. Food Interaction Features

- Users can click on any food item to view:

  - Food details
  - Ingredients
  - Price
  - Review

- Only authorized users can:

  - Add food to Favorites by clicking the heart icon
  - Add food to the Cart (Bag)
  - Increase or decrease food quantity in the cart
  - Add one review per food item

---

### 5. Cart and Checkout

- The Cart page displays:

  - Selected food items
  - Quantity
  - Total price
  - Delivery fee
  - Tax

- After reviewing the order:

  - Click the Checkout button
  - The order is placed successfully
  - The cart is cleared after ordering

> **Note:** The application does not use a real payment system. Payment is simulated for demonstration purposes.

---

### 5.4 Testing the Application

- Register a new user or log in
- Browse food categories and popular items
- View food details
- Add items to cart and favorites
- Place orders (simulation)

---

## 6. APK Build Information

The Android installation file (APK) is generated using:

```bash
flutter build apk --release --dart-define=BACKEND_URL=https://food-delivery-api-g95h.onrender.com/api
```

The output file is located at:

```
build/app/outputs/flutter-apk/app-release.apk
```

This APK can be installed directly on an Android device for testing.

---

## 7. Conclusion

HelloFood is a complete and scalable online food delivery application that demonstrates effective use of Flutter for frontend development, Node.js for backend services, and MongoDB for data management.The application follows clean architecture principles and is designed for future enhancements such as real-time tracking and online payments.
