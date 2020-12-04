import React, { useState, useRef, useEffect } from "react";
import { Link, navigate } from 'gatsby';
// media-imgs
import downIcon from '../imgMedia/icons8-downloading-updates-96.png';
import imgCelebration from '../imgMedia/ian-schneider-PAykYb-8Er8-unsplash.jpg';
import iconGuitar from '../imgMedia/icons8-guitar-64.png';
//translation
import { useTranslation } from 'react-i18next';

//+++++++++++++++++
// testing npm install file-saver 
import Filesaver from 'file-saver';
// +++++++++++++++++
 
const Paylpalbutton = (props) => {
  const { t } = useTranslation();
  const [paidFor, setpaidFor] = useState(false);
 
  /////test data
  // Email ID: sb-dzf43d3560576@personal.example.com
  // System Generated Password:  A9?@Y5+n
//   Card Type: Visa
// Card Number: 4032039423214313
// Expiration Date: 10/2021
// CVV: 160
  ///end test data

  let paypalRef = useRef();
  const amount = Number(props.amount).toFixed(2);
  const description = props.description || "selecting...";
  const itemsBought = props.itemsBought;

  // const product = {
  //   price: amount,
  //   description: description
  // };
  console.log('=====Button PPAL======');
  console.log(`Description:`,description);
  console.log(`Total Amount Button: ${amount}`);
  console.log(`Items Bought`);
  console.log(itemsBought);
  console.log('=====END Button=======');

  useEffect(() => {
    try {
      window.paypal
            .Buttons({
              createOrder: (data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: description,
                      amount: {
                        currency_code: "USD",
                        value: amount
                      }
                    }
                  ]
                });
              },
              onCancel: (data) => {
                // Show a cancel page, or return to cart
                console.log('User Cancelled button');
                // let's go back to music
                navigate("/Music");
              },
              onApprove: async (data, actions) => {
                const order = await actions.order.capture();

                setpaidFor(true);
                console.log('======order======');
                console.log(order);
                console.log('====end-order=====');
              },
              onError: (err) => {
                  console.log('======Error=====');
                  console.error(err);
                  console.log('======EndEr=====');
              }, 
            })
            .render(paypalRef.current);
    }
    catch (e) {
      console.log('=======Fatal Error========');
      console.log('Error trying to load PPAL buttons',e);
      console.log('========End Error=========');
    }
 
  },[description,amount]);

  ///files download
  const handleDownload = () => {
    try {
      itemsBought.forEach(item => {
        console.log(`++++++++Downloading ${item.fileName}+++++++`);
        const _path = item.fileSrc;
        console.log(`Downloading from: ${_path}`)
        Filesaver.saveAs( _path, item.fileName);
      })
    } catch (err) {
        console.log('=====Fatal Error Downloading Files=====');
        console.log(err);
        console.log('=====End Error Downloading Files=====');

    }
  }
  ////end files download

  //scroll to view
  const scrollDown = () => {
    let element = document.getElementById("paidItem");
    // smooth scroll to element and align it at the bottom
    element.scrollIntoView({ behavior: 'smooth'});
    // console.log('Scrolling to => paidItem');
  }

  if (paidFor){
    return (
      <div className="paidItemCont" id="paidItem">
        <img src={imgCelebration} alt="Celebrate Life" className="imgCelebration" onLoad={scrollDown}/>
        <h1>{t('ppalBtn.messageJoy')}</h1>

      <div className="downloadTextPPalBtn">
          <p>{t('ppalBtn.downloadPT')}</p>
          {/* user can download files  */}
          <img 
            src={downIcon} 
            alt="Download in progress..." 
            onKeyDown={handleDownload}
            onLoad={handleDownload} 
            className="downIcon" 
            onClick={handleDownload}
            />
          {/* end of downloading call */} 
        </div>
        <p>{t('ppalBtn.contactMe')}<Link to="/contact">{t('ppalBtn.contactMeAsap')}</Link></p>
        <Link to="/Music" activeClassName="activeNavLink" className="linkDivPayment">
          <p>{t('ppalBtn.linkPPal')}</p>
          <img src={iconGuitar} alt="take me to the music with passion" className="iconGuitar" /> 
        </Link>
      </div>
    )
  }

  return (
        <div>
          {/* <h1>
            {product.description} for ${product.price}
          </h1>
          <img src={product.img} width="200" /> */}
          <div ref={paypalRef} />
        </div>
  )
}
 
export default Paylpalbutton;