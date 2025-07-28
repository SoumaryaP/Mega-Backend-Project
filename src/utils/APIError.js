class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message); // Call the parent Error class constructor

        this.statusCode = statusCode;  // HTTP status code (e.g., 404, 500)
        this.data = null;              // Custom data (not used here, but could be)
        this.message = message;        // Error message (passed to Error)
        this.success = false;          // Always false for errors
        this.errors = errors;          // Additional error details (optional array)

        // Add stack trace if provided, else capture it automatically
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);//inbuilt function
        }
    }
}

export { ApiError };
