import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="preload" as="style"
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap"
          />
          <link rel="preload" as="style"
            href="https://fonts.googleapis.com/css2?family=Lora&display=swap"
          />
          <link rel="preload" href="/HeartBreath-Demo.woff" as="font" crossOrigin="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
