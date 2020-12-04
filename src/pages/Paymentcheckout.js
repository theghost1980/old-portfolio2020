import React, { Component } from 'react';
//components
import Paylpalbutton from '../components/Paypalbutton';
import Head from '../components/Head';
// translations
import { withTranslation } from 'react-i18next';
//media-imgs
import cdInspiration from '../imgMedia/Inspiration-caratula.jpg';
import cdBhajananda from '../imgMedia/bhajananda-estar-en-ti.png';
import cdParapeto from '../imgMedia/parapeto-largo-viaje-del-sol.png';

class Paymentcheckout extends Component {
    constructor(props) {
        super(props);
        // inner component for test
        // const items = [
        //         {id: 1, title:'Digital Music Album Inspiration', price: 10.00},
        //         {id: 2, title:'Digital Music Album To be In You', price: 10.00},
        //         {id: 3, title:'Digital Music Album Sun long journey', price: 10.00}
        // ];
        //the only way to make it work to run build is create another 'just in case empty' array object to pass the products
        const _listCD = [
            {id:1,'songs':'11','styles': this.props.t('slider.styles1'),src: cdInspiration, price:10.00, title: this.props.t('slider.titleCD1'),'format': this.props.t('slider.formatM'), fileSrc:'https://github.com/theghost1980/newportfolio/raw/master/static/DFiles/Digital-Album-Inspiration.zip', fileName:'Digital-Album-Inspiration.zip'},
            {id:2,'songs':'11','styles': this.props.t('slider.styles2'),src: cdBhajananda, price:10.00, title: this.props.t('slider.titleCD2'),'format': this.props.t('slider.formatM'), fileSrc:'https://github.com/theghost1980/newportfolio/raw/master/static/DFiles/Bhajananda-CD-Album.zip', fileName:'Bhajananda-CD-Album.zip'},
            {id:3,'songs':'15','styles': this.props.t('slider.styles3'),src: cdParapeto, price :10.00, title: this.props.t('slider.titleCD3'),'format': this.props.t('slider.formatM'), fileSrc:'https://github.com/theghost1980/newportfolio/raw/master/static/DFiles/Parapeto-CD-Album.zip', fileName:'Parapeto-CD-Album.zip'}
        ];
        // from props
        const items = _listCD;
        this.state = {
            products: items,
            checkedItems: new Map(),
            checkOut: false,
            amount: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckOut = this.handleCheckOut.bind(this);
    }
    handleChange(event) {
        let isChecked = event.target.checked;
        let item = event.target.value; //we get id of product
    
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(Number(item), isChecked)}));
        //set amount
        // console.log(`item:${item}`);
        // console.log(typeof item);
        const _products = this.state.products;
        // console.log(_products);
        const obj = _products.find(o => o.id === Number(item)); //we get the obj
        // console.log(obj);
        // console.log(`Price:${obj.price}`);
        if (isChecked){
            this.setState({ amount: this.state.amount + Number(obj.price) });
        } else {
            this.setState({ amount: this.state.amount - Number(obj.price) });
        }
    }
    handleCheckOut() {
        if (this.state.amount > 0){
            this.setState({ checkOut: !this.state.checkOut });
        } else {
            console.log('Please select at least one Item');
        }
    }
    
    render() {
        // console.log(this.props);
        // const _state = this.state;
        const _products = this.state.products;
        let _description = '';
        let itemsBought = [];
        this.state.checkedItems.forEach(function(v,id){
            // return _products.find(o => o.id === v).title + "-";
            // console.log(`${id}-${v}`);
            // console.log(typeof id);
            if (v === true){
                const _obj = _products.find(pro => pro.id === id);
                const _price = Number(_obj.price).toFixed(2);
                _description += `${_obj.title} $${_price} \n`;
                itemsBought.push(_obj);
            }
        });
        // console.log(_state);
        // console.log(`Descr: ${_description}`);
        // console.log(`Total: ${this.state.amount}`);
        
        return (
            <div className="paymentCont">
                <Head title="Checkout" />
                <ul className="ulAlbumsContainer">
                    {_products.map(item => {
                        return (
                            <li key={item.id}>
                                <label htmlFor={item.id}>
                                <div className="cdAlbumPurchaseCont">
                                    <img src={item.src} alt={item.title} className="cdImgPurchase" />
                                    <ul className="cdTextPurchase">
                                        <li key={`${item.id}-1`}>{this.props.t('slider.title')} {item.title}</li>
                                        <li key={`${item.id}-2`}>{this.props.t('slider.format')} {item.format}</li>
                                        <li key={`${item.id}-3`}>{this.props.t('slider.styles')} {item.styles}</li>
                                        <li key={`${item.id}-4`}>{this.props.t('slider.price')} ${item.price}</li>
                                        <li key={`${item.id}-5`}>
                                            <input type="checkbox" className="biggerText" id={item.id} value={item.id} onChange={this.handleChange} />
                                            <span className="biggerText">{this.props.t('paymentCO.addMeText')}</span>
                                        </li>
                                    </ul>
                                </div>
                                </label>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    {/* <h2>{_description}</h2> */}
                    <h2>{this.props.t('paymentCO.totalA')} ${this.state.amount}</h2>
                    <div 
                        role="button" 
                        className={`checkOutBtn ${this.state.checkOut ? 'hideCOBtn' : null }`} 
                        onClick={this.handleCheckOut}
                        tabIndex={0}
                        onKeyDown={this.handleCheckOut}
                    >{this.props.t('paymentCO.proceedP')}</div>
                    <hr />
                    { this.state.checkOut && 
                        <Paylpalbutton amount={this.state.amount} description={_description} itemsBought={itemsBought} />
                    }
                </div>
            </div>
        )
    }
}

export default withTranslation()(Paymentcheckout);

// const PaymentCheckOut = (props) => {
//     const [amount, setamount] = useState(0)
//     const [selected, setSelected] = useState({});
//     const checkedItems = [
//         {
//             name: 'check-1',
//             key: 'checkCD1'
//         },
//         {
//             name: 'check-2',
//             key: 'checkCD2'
//         },
//         {
//             name: 'check-3',
//             key: 'checkCD2'
//         }
//     ];

//     const items = props.location.state.items;
//     const itemPres = props.location.state.item;
//     const itemPresPrice = props.location.state.price;
//     const itemId = props.location.state.id;

//     const handleChange = (e) => { 
//         setSelected({
//             ...selected, [e.target.name] : e.target.checked,
//         });
//     }

//     useEffect(() => {
//         // console.log(props);
//         console.log(`Item preselected========`);
//         console.log(`Item preselected: ${itemPres}`);
//         console.log(`Item Id: ${itemId}`);
//         console.log(`Item price: ${itemPresPrice}`);
//         console.log(`Items List:`);
//         console.log(items);
//         console.log(`========================`);
//     },[itemPres,itemId,itemPresPrice,items]);

//     useEffect(() => {
//         console.log("Items", selected);
//         console.log("Amount",amount)
//     }, [selected,amount]);

//     return (
//         <div className="paymentCont">
//             <ul className="ulAlbumsContainer">
//                 {items.map((cd) => {
//                     return (
//                         <li key={cd.id}>
//                             <div className="cdAlbumPurchaseCont">
//                                 <img src={cd.src} alt={cd.alt} className="cdImgPurchase" />
//                                 <ul className="cdTextPurchase">
//                                     <li key={`${cd.id}-5`}>
//                                         <div>
//                                             <input className="biggerText" type="checkbox" id={cd.id} name={cd.title} value={selected} 
//                                                 onChange={handleChange} checked={selected[cd.id]} 
//                                                 onClick={(e) => {
//                                                     (e.target.checked ? setamount(amount + cd.price) : setamount(amount - cd.price));
//                                                 }}
//                                             />
//                                             <label className="biggerText" htmlFor={`${cd.id}`}>Add me to cart</label>
//                                         </div>
//                                     </li>
//                                     <li key={`${cd.id}-1`}>Title: {cd.title}</li>
//                                     <li key={`${cd.id}-2`}>Format: {cd.format}</li>
//                                     <li key={`${cd.id}-3`}>Styles: {cd.styles}</li>
//                                     <li key={`${cd.id}-4`}>Price: ${cd.price}</li>
//                                 </ul>
//                             </div>
//                         </li>
//                     )
//                 })}
//             </ul>
//             <div>
//                 <h2>Total Amount: ${amount}</h2>
//                 <PaylpalButton amount={amount}
//                     description={selected}
//                 />
//             </div>
//         </div>
//     )
// }

// export default PaymentCheckOut;