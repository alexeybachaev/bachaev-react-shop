function Footer() {
  return (
    <footer className="page-footer blue darken-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/alexeybachaev/bachaev-react-shop/tree/master "
            target="_blank"
            rel="noreferrer"
          >
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
