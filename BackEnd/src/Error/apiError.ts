export default class ApiError  {
    public message: string;
    public status: number | null;
  
    constructor(message: string) {
      this.message = message;
      this.status = null;
    }
  }