# 📚 Bookshelf API
This project is the final submission for the **Belajar Back-End Pemula menggunakan JavaScript** class by Dicoding Academy. The application allows users to _create_, _read_, _update_, and _delete_ book data through a simple RESTful API.


## 🚀 Running the Application
Use the following commands to **start** the server and run code **linting**:
   ```bash
   npm run start    # Start the server
   npm run lint     # Run ESLint to check code quality
   ```

## 📦 Installation
1. **Clone** this repository:
   ```bash
   git clone https://github.com/amrann/dicoding-subms-be-pemula.git
   cd dicoding-subms-be-pemula
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## ⚙️ Dependencies
   ```bash
   npm install @hapi/hapi   # HTTP server framework
   npm install nanoid@3     # Generates unique IDs
   npm init @eslint/config@latest   # Initialize ESLint configuration
   npm install --save-dev eslint-config-dicodingacademy     # Dicoding's ESLint style guide
   ```

## 🧪 API Testing with Postman

This project includes a file named `BookshelfAPITestCollectionAndEnvironment`, which contains a Postman Collection and Environment for testing the API. The file can be found in the `/tests/` folder.

### 🔁 How to Import into Postman:
1. Extract the downloaded ZIP file to get **two `.json` files**.
2. Open the **Postman** application.
3. Click the **Import** button at the top left panel.
4. Click **Upload Files**, and select both extracted JSON files.
5. Once imported, the Bookshelf API collection and environment will appear in your Postman workspace.

📌 You can immediately test all API endpoints using this collection without manually setting up each **request**.