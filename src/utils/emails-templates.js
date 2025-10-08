const EMAIL_IPHONE_ADDED_TEMPLATE = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Novo Anime Cadastrado</title> 
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #d1d5db; /* foreground */
      background-color: #f3f4f6; /* background */
      margin: 0;
      padding: 40px 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff; /* card */
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
    .header {
      background-color: #ffffff; /* card */
      padding: 20px;
      text-align: center;
    }
    .logo {
      font-size: 28px;
      font-weight: bold;
      background: linear-gradient(135deg, #4f83cc, #1c67b8); /* gradient-primary */
      border-radius: 6px;
      margin: 0;
    }
    .content {
      padding: 30px;
      background-color: #ffffff; /* card */
    }
    .iphone-image {
      width: 100%;
      max-height: 250px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .product-details {
      background-color: #f3f4f6; /* foreground */
      border-left: 4px solid #1f40af; /* primary */
      padding: 15px;
      margin: 20px 0;
      border-radius: 6px;
    }
    .product-details h2 {
      margin-top: 0;
      color: #1f40af; /* primary */
    }
    .product-details p strong {
      color: #3b82f6; /* primary-foreground */
    }
    .button {
      display: inline-block;
      background: #1f40af; /* primary */
      color: #ffffff; /* primary-foreground */
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 6px;
      margin: 20px 0;
      font-weight: bold;
      transition: all 0.3s ease;
    }
    .button:hover {
      background: #2563eb; /* accent */
    }
    .footer {
      background: #f3f4f6; /* foreground */
      color: #9ca3af; /* muted-foreground */
      padding: 20px;
      text-align: center;
      font-size: 12px;
    }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="logo">IphonesFly</h1>
      <h2 style="color:#f3f4f6; margin-top:8px;">Novo iPhone Adicionado ao Carrinho</h2>
    </div>

    <div class="content">
      <p style="color:#f5f5f5;">Olá, cliente</p>
      <p style="color:#f5f5f5;">Um novo iPhone foi adicionado com sucesso ao seu carrinho de compras.</p>

      <p>Atenciosamente,<br>Equipe IphonesFly</p>
    </div>

    <div class="footer">
      <p style="color:#f5f5f5;">&copy; 2025 IphonesFly - Todos os direitos reservados</p>
      <p style="color:#f5f5f5;">Este é um e-mail automático, por favor não responda.</p>
    </div>
  </div>
</body>
</html>
`

module.exports = EMAIL_IPHONE_ADDED_TEMPLATE;