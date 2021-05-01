import admin from 'firebase-admin';

const serviceAccount={
  "type":  process.env.type,
  "project_id":  process.env.project_id,
  "private_key_id": process.env.private_key_id,
  "private_key": process.env.private_key,
      "client_email": process.env.client_email,
  "client_id": process.env.client_id,
  "auth_uri": process.env.auth_uri,
  "token_uri": process.env.token_uri,
  "auth_provider_x509_cert_url": process.env.auth_provider_x509_cert_url,
  "client_x509_cert_url": process.env.client_x509_cert_url,
}

if (!admin.apps.length) {
  const privateKey= process.env.private_key.replace(/\\n/g, '\n')
  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey: privateKey,
      clientEmail: process.env.client_email,
      projectId: process.env.project_id,
    }),
    databaseURL: 'https://nextjs-25f05-default-rtdb.firebaseio.com/',
  });
}
export default admin.firestore();