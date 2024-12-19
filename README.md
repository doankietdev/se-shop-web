# SE Shop Web

Welcome to the **SE Shop Web** repository! This project serves as the frontend for the SE Shop platform, providing a seamless and engaging user experience with modern web technologies.

## Features

- **Authentication and Authorization**
  - Login with system account
  - Login with **Google**
  - Sign up
- **Currency conversion**
- **Payment Integration**:
  - **MoMo Wallet**
  - **PayPal**
  - **VNPay**
- **Shipping Management**:
  - Integration with **Viettel Post** service
- **File Uploading**
- **Product Management**
- **Cart Management**
- **Discount Management**
- **Order Management**
- **Address Management**
- **User Management**
- **...**

---

## Technologies

### Core Framework:

- **ReactJS**: Component-based library for building dynamic user interfaces

### Styling:

- **TailwindCSS**: Utility-first CSS framework for rapid UI development

### Routing:

- **React Router DOM**: Declarative routing for React applications

### HTTP Client:

- **RTK Query**: Promise-based HTTP client for making API requests

---

## Deployment Environments

- **Staging**: [se-shop-web.vercel.app](https://se-shop-web.vercel.app)

  - **Testing account:**
    Email: doankietdev.test@gmail.com
    Password: Test@123
  - **Testing payment accounts:**

    - **Paypal**:
      Email: `sb-d0924333115240@personal.example.com`
      Password: `Z64g<a5T`
    - **MoMo**

      - Debit Card

        | No  | Name         | Card Number         | Release Date | OTP | Test Case           |
        | --- | ------------ | ------------------- | ------------ | --- | ------------------- |
        | 1   | NGUYEN VAN A | 9704 0000 0000 0018 | 03/07        | OTP | Successful          |
        | 2   | NGUYEN VAN A | 9704 0000 0000 0026 | 03/07        | OTP | Card Locked         |
        | 3   | NGUYEN VAN A | 9704 0000 0000 0034 | 03/07        | OTP | Insufficient Funds  |
        | 4   | NGUYEN VAN A | 9704 0000 0000 0042 | 03/07        | OTP | Card Limit Exceeded |

      - Credit Card

        | No  | Name         | Number              | Expiry Date | CVC | OTP    | Test Case       |
        | --- | ------------ | ------------------- | ----------- | --- | ------ | --------------- |
        | 1   | NGUYEN VAN A | 5200 0000 0000 1096 | 05/25       | 111 | OTP    | Card Successful |
        | 2   | NGUYEN VAN A | 5200 0000 0000 1104 | 05/25       | 111 | OTP    | Card failed     |
        | 3   | NGUYEN VAN A | 4111 1111 1111 1111 | 05/25       | 111 | No OTP | Card Successful |

---

## Contact

For any inquiries or support, please contact:

- Email: doankietdev@gmail.com
- GitHub: [doankietdev](https://github.com/doankietdev)
