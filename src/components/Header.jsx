export default function Header() {

return (<header>

  <div
    className="p-5 text-center bg-image"
    style={{
      backgroundImage: `url(https://uploads4.wikiart.org/images/m-c-escher/day-and-night.jpg!Large.jpg)`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center center',
      height: '35 vh'
    }}
  >
    <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="jumbotron text-white">
          <h1 className="mb-3">J. Maldonado Guemarez</h1>
          <h4 className="mb-3">Web Development Portfolio</h4>
        </div>
      </div>
    </div>
  </div>
</header>);
}