import axios, { AxiosError } from 'axios';

export default class EmailService {
  static async sendEmail(templateParams: Record<string, string>): Promise<unknown> {
    try {
      const url = `${process.env.API_CONTACT_URL}/send-email`;

      if (!url) {
        throw new Error('API_URL is not defined in the environment.');
      }

      const response = await axios.post(url, templateParams);
      return response.data;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response?.data?.message || error.message
          : error instanceof Error
            ? error.message
            : 'Unknown error sending the email.';

      throw new Error(`Error sending the email: ${errorMessage}`);
    }
  }
}
