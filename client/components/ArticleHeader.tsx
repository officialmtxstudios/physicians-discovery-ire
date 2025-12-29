export default function ArticleHeader() {
  return (
    <header className="editorial-header">
      <div className="header-content">
        <h1 className="publication-title">SkinCare <span className="publication-subtitle">TECH</span></h1>
      </div>
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-content">
          <span className="breadcrumb-item">Home</span>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-item">Beauty</span>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-item">Anti-Aging</span>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-item">Advertorial</span>
        </div>
      </nav>
    </header>
  );
}
