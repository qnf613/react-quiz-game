import "./page-footer.css"

function PageFooter() {
    const year = new Date().getFullYear();
    return <footer className="page-footer">@ Eric Kwon, {year}</footer>;
}

export default PageFooter;