import Footer from "../pages/landing/Footer";

const Layout = (props: any) => (
  <div>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    <style jsx global>{`
      html {
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        font-size: 16px;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-family: Vinnytsia Sans, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        background: rgba(0, 0, 0, 0.05);
        text-size-adjust 100%;
      }

      input,
      textarea {
        font-size: 16px;
      }

      button {
        cursor: pointer;
      }
    `}</style>
    <style jsx>{`
      .layout {
        padding: 0;
      }
    `}</style>
    <div className="layout">
      {props.children}
      <Footer />
    </div>
  </div>
);

export default Layout;
