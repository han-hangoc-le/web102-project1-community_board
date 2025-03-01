import './App.css'
import Header from './components/header'
import Card from './components/card'


function App() {

  return (
    <>
      <div className='app'>
        <Header/>
        <div className='cardContainer' style={{whiteSpace: 'pre-line'}}>
          <Card imagepath={'/bunmam.jpg'} itemname={'Cau Nguyen Van Troi'} english={'Nguyen Van Troi Bridge'} category={'Local Attractions'} website={'https://www.foody.vn/da-nang/bun-mam-co-nghia'}/>
          <Card imagepath={'/bunmam.jpg'} itemname={'Pho am thuc\nAn Thuong'} english={'An Thuong Food Street'} category={'Local Attractions'} website={'https://www.foody.vn/da-nang/bun-mam-co-nghia'}/>
          <Card imagepath={'/bunmam.jpg'} itemname={'Son Tra Tinh Vien'} english={'Son Tra Zen Garden'} category={'Local Nature'} website={'https://www.foody.vn/da-nang/bun-mam-co-nghia'}/>
          <Card imagepath={'/bunmam.jpg'} itemname={'Bien Man Thai'} english={'Man Thai Beach'} category={'Local Nature'} website={'https://www.foody.vn/da-nang/bun-mam-co-nghia'}/>

          <Card imagepath={'/bunmam.jpg'} itemname={'Bun Mam Co Nghia'} english={'Aunt Nghia\'s Fermented\nFish Noodle Soup'} category={'Local Food'} website={'https://www.foody.vn/da-nang/bun-mam-co-nghia'}/>
          <Card imagepath={'/bunmam.jpg'} itemname={'Kem Bo Co Van'} english={'Aunt Van\'s\nAvocado Ice Cream'} category={'Local Food'} website={'https://www.foody.vn/da-nang/bun-mam-co-nghia'}/>
          <Card imagepath={'/bunmam.jpg'} itemname={'Cut Lon Xao Me'} english={'Stir-Fried Quail Eggs\nwith Tamarind Sauce'} category={'Local Food'} website={'https://www.foody.vn/da-nang/bun-mam-co-nghia'}/>
          <Card imagepath={'/bunmam.jpg'} itemname={'Banh Trang Di Em'} english={'Auntie Em\'s\nRice Paper Snack'} category={'Local Food'} website={'https://www.foody.vn/da-nang/bun-mam-co-nghia'}/>

          <Card imagepath={'/bunmam.jpg'} itemname={'Banh Trang Cuon\nThit Heo Dai Loc'} english={'Rice Paper Rolls with\nPork - Dai Loc style'} category={'Local Food'} website={'https://www.foody.vn/da-nang/bun-mam-co-nghia'}/>
          <Card imagepath={'/bunmam.jpg'} itemname={'Banh Beo Quan Lieu'} english={'Lieu\'s Steamed Rice Cakes'} category={'Local Food'} website={'https://www.foody.vn/da-nang/bun-mam-co-nghia'}/>
          <Card imagepath={'/bunmam.jpg'} itemname={'My Quang Ca Loc'} english={'Quang-Style Noodles\nwith Snakehead Fish'} category={'Local Food'} website={'https://www.foody.vn/da-nang/bun-mam-co-nghia'}/>
          <Card imagepath={'/bunmam.jpg'} itemname={'Banh My Chao\nDuong Ray'} english={'Railroad Pan-Fried Banh Mi'} category={'Local Food'} website={'https://www.foody.vn/da-nang/bun-mam-co-nghia'}/>
        </div>
      </div>
    </>
  )
}

export default App
