import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Faltan campos requeridos." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Nuevo mensaje de contacto de ${name}`,
      replyTo: email,
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return Response.json(
      { message: "Correo enviado correctamente." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error enviando correo:", error);

    return Response.json(
      { error: "No se pudo enviar el correo." },
      { status: 500 },
    );
  }
}
