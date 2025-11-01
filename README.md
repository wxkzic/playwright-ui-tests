# 🎭 Playwright UI Automation Project

This repository contains an end-to-end UI automation framework built with **Playwright** and **TypeScript**.  
The project is focused on testing the [SauceDemo](https://www.saucedemo.com) web application using the **Page Object Model (POM)** approach, clean structure, and reusable test logic.

---

## 🚀 Features

- **Page Object Model (POM)** structure for scalable, maintainable tests  
- **Global setup** with session storage for pre-authenticated runs  
- **Cross-browser testing** (Chromium, Firefox, WebKit)  
- **Parallel execution** out of the box  
- **HTML test reports** and **trace viewer** for debugging  
- **Reusable utility functions** (`/utils` folder)  
- **GitHub Actions CI pipeline** (runs tests on every push)

---

## 🧩 Project Structure

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash

git clone https://github.com/<your-username>/playwright-ui-tests.git
cd playwright-ui-tests

---

npm install
npx playwright install 

---

npx playwright test 
npx playwright test --ui
npx playwright test tests/login.spec.ts

---

npx playwright show-report

---
```

🔁 Continuous Integration (GitHub Actions)

Tests run automatically on every push or pull request.
See workflow file: .github/workflows/playwright.yml.

---

🧠 Technologies Used

Playwright — modern E2E testing framework

TypeScript — for strong typing and better maintainability

Node.js / npm — dependency management

GitHub Actions — continuous integration

SauceDemo.com — sample web app for UI automation practice

---

👤 Author
Illia Vintoniuk

📧 vintoniuk.illia@gmail.com

💼 QA Automation Engineer / Computer Science Student
🌍 Kraków, Poland

---

💡 Future Improvements

Add API tests (Playwright APIRequest or Postman + Newman)

Implement data-driven testing using JSON/CSV files

Extend with visual regression tests (toHaveScreenshot())

Integrate Allure reporting for advanced test analytics

---
