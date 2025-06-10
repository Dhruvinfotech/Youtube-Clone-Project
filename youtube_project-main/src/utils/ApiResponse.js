class ApiResponse {
  constructor(statusCode, message = "Success", data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode;
  }

//   static success(data) {
//     return new ApiResponse('success', 'Request was successful', data);
//   }

//   static error(message) {
//     return new ApiResponse('error', message);
//   }

//   toJSON() {
//     return {
//       status: this.status,
//       message: this.message,
//       data: this.data,
//     };
//   }
}