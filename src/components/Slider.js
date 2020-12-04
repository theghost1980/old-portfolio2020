import React from "react";
// components
import Alicecarousel from 'react-alice-carousel';
import { Link } from 'gatsby';
// translations
import { useTranslation } from "react-i18next";

  
//styles
import "react-alice-carousel/lib/alice-carousel.css";


const Slider = (props) => {
  const { t } = useTranslation();

  const _type = props.type;
  let items = props.list;
  const _source = props.source;
  const _ext = props.ext;
  const _className = props.class;
  const _autoWidth = props.autoWidth;
  const _autoHeight = props.autoHeight;
  const _disableButtonsControls = props.disableButtonsControls;
  const _autoPlayInterval = props.autoPlayInterval;
  const _autoPlay = props.autoPlay

  //testing download link
  // const handleDownload = () => {
  //   console.log('Downloading File+++++++');
  //   FileSaver.saveAs(
  //     process.env.PUBLIC_URL + "/DFiles/text.txt",
  //     "text.txt");
  // }

  //conditional to render imgList or just text
  if (_type === 'Img'){
    items = items.map((item,index) => {
      return (
        // testing with minHeight OJO style={{ textAlign: 'center', minHeight: '1000px' }}
        <div key={item.id} className="divSetHeightSliderImg">
          <img className="sliderimg" src={`${_source}${index}${_ext}`} alt={item.caption}/>
          {(item.caption !== null && item.caption !=='') &&
              <p className="pCaptionSlide">{item.caption}</p>}
          {(item.credits !== null && item.credits !=='') &&
            <p className="pCreditsSlide">{t('slider.credits')} {item.credits}</p>}
        </div>
      );
    });
  } else if (_type === 'Text') {
    items = items.map((item,index) => {
      return (
        <div key={item.id} className="divSlideText">
         <p className="pSlideTextTitle">{item.title}</p>
         <ul className="ulSlideText">
          {item.list.map((list) => {
            return (
              <li key={list.id}>{list.item}</li>
            )
          })}
         </ul>
         {item.icon &&
          <div key={`${item.id}-xImg`} className="roundCircle">
            <img src={item.src} alt={item.alt} className="imgIconSlideText" />
          </div>
          }
        </div>
      );
    });
  } else if (_type === 'CD') {
    items = items.map((cd)=> {
      // console.log(cd.src);
      return (
        <div key={cd.id}>
          <img src={cd.src} alt={cd.title} className="cdImg" />
          <ul className="ulCDInfo">
            <li key={`${cd.id}-1a`}>{t('slider.title')} {cd.title}</li>
            <li key={`${cd.id}-2s`}>{t('slider.format')} {cd.format}</li>
            <li key={`${cd.id}-3d`}>{t('slider.styles')} {cd.styles}</li>
            <li key={`${cd.id}-4f`}>{t('slider.price')} ${cd.price}</li>
          </ul>
          <Link className="actionBtn" to="/Paymentcheckout" 
            // state={{ 
            //   item: cd.title,
            //   price: cd.price,
            //   id: cd.id,
            //   products: items
            // }} 
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >{t('slider.btnText')}</Link>
        </div>
      )
    })
  }


  return ( 
      <div className={_className}>
        <Alicecarousel
          autoPlay={_autoPlay}
          autoPlayInterval={_autoPlayInterval}
          autoWidth={_autoWidth}
          autoHeight={_autoHeight}  
          infinite
          mouseTracking
          items={items}
          animationType="fadeout"
          disableButtonsControls={_disableButtonsControls}
        ></Alicecarousel>
      </div>
  )
};

export default Slider;

// code removed to test jusy img component
        // <div className="sliderCont">
        //   {(item.caption !== null && item.caption !=='') &&
        //     <p className="pCaptionSlide">{item.caption}</p>
        //   }
        //   {(item.credits !== null && item.credits !=='') &&
        //     <p className="pCreditsSlide">Credits: {item.credits}</p>
        //   }
        // </div>
//end removed