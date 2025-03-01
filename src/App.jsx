import './App.css'
import Header from './components/header'
import Card from './components/card'


function App() {

  return (
    <>
      <div className='app'>
        <Header/>
        <div className='cardContainer' style={{whiteSpace: 'pre-line'}}>
          <Card imagepath={'/cau.jpg'} itemname={'Cau Nguyen Van Troi'} english={'Nguyen Van Troi Bridge'} category={'Local Attractions'} website={'https://maps.app.goo.gl/V684XY1HvdGAtE8v5'}/>
          <Card imagepath={'/anthuong.jpg'} itemname={'Pho am thuc\nAn Thuong'} english={'An Thuong Food Street'} category={'Local Attractions'} website={'https://maps.app.goo.gl/aR19CsjazzyzP6ur9'}/>
          <Card imagepath={'/tinhvien.jpg'} itemname={'Son Tra Tinh Vien'} english={'Son Tra Zen Garden'} category={'Local Nature'} website={'https://maps.app.goo.gl/YQ4s6jauks8VbWZY6'}/>
          <Card imagepath={'/manthai.jpg'} itemname={'Bien Man Thai'} english={'Man Thai Beach'} category={'Local Nature'} website={'https://maps.app.goo.gl/oZA6cz4yCBnCHyqKA'}/>

          <Card imagepath={'/bunmam.jpg'} itemname={'Bun Mam Co Nghia'} english={'Aunt Nghia\'s Fermented\nFish Noodle Soup'} category={'Local Food'} website={'https://www.foody.vn/da-nang/bun-mam-co-nghia'}/>
          <Card imagepath={'/kembo.jpeg'} itemname={'Kem Bo Co Van'} english={'Aunt Van\'s\nAvocado Ice Cream'} category={'Local Food'} website={'https://www.foody.vn/da-nang/kem-bo-co-van-cho-bac-my-an'}/>
          <Card imagepath={'/lanh.jpg'} itemname={'Cut Lon Xao Me'} english={'Stir-Fried Quail Eggs\nwith Tamarind Sauce'} category={'Local Food'} website={'https://www.foody.vn/da-nang/lanh-cut-lon-xao-me-nuoc-ep-le-dinh-ly'}/>
          <Card imagepath={'/banhtrang.jpg'} itemname={'Banh Trang Di Em'} english={'Auntie Em\'s\nRice Paper Snack'} category={'Local Food'} website={'https://www.foody.vn/da-nang/banh-trang-kep-di-em'}/>

          <Card imagepath={'/thitheo.jpg'} itemname={'Banh Trang Cuon\nThit Heo Dai Loc'} english={'Rice Paper Rolls with\nPork - Dai Loc style'} category={'Local Food'} website={'https://www.foody.vn/da-nang/que-xua-mi-quang-banh-trang-thit-heo'}/>
          <Card imagepath={'/banhbeo.jpg'} itemname={'Banh Beo Quan Lieu'} english={'Lieu\'s Steamed Rice Cakes'} category={'Local Food'} website={'https://www.foody.vn/da-nang/quan-lieu-banh-beo-nam-loc'}/>
          <Card imagepath={'/my.png'} itemname={'My Quang Ca Loc'} english={'Quang-Style Noodles\nwith Snakehead Fish'} category={'Local Food'} website={'https://maps.app.goo.gl/Wdaxu9gft3HAgmGz7'}/>
          <Card imagepath={'/duongray.JPEG'} itemname={'Banh My Chao\nDuong Ray'} english={'Railroad Pan-Fried Banh Mi'} category={'Local Food'} website={'https://maps.app.goo.gl/NHYECFYxvrczTzAw5'}/>
        </div>
      </div>
    </>
  )
}

export default App
