import * as jose from 'jose'

export const isAuthenticated = async req => {
  let token = req.headers.get('authorization') || req.headers.get('Authorization')

  if (token) {
    try {
            const secret = new TextEncoder().encode(
            "Swe4g7c?UBm5Nrd96vhsVDtkyJFbqKMTm!TMw5BDRLtaCFAXNvbq?s4rGKQSZnUP"
            );

      const decoded = await jose.jwtVerify(token, secret)

      if (decoded.payload?.meriID) {
        return decoded.payload?.meriID;
      } else {
        return false
      }
    } catch (err) {
      console.error('isAuthenticated error: ', err.message)

      return false
    }
  } else {
    return false
  }
}