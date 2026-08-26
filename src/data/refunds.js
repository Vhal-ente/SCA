const PAYMENTS_KEY="sca-payments";
const REFUNDS_KEY="sca-refunds";

const read=(key,fallback=[])=>{try{const value=JSON.parse(localStorage.getItem(key)||"null");return Array.isArray(value)?value:fallback}catch{return fallback}};
const write=(key,value)=>{localStorage.setItem(key,JSON.stringify(value));window.dispatchEvent(new CustomEvent("sca-storage",{detail:{key}}));return value};

const seedPayments=[
  {id:"pay-warzone",ownerId:"demo",serviceType:"Tournament",serviceId:"warzone-hyperx-2026",serviceName:"Call of Duty: Warzone by HyperX",amount:2500,currency:"NGN",paidAt:"2026-08-22T10:30:00.000Z",reference:"SCA-WARZONE-260822",status:"Paid",eligibility:"Eligible",refundedAmount:0,method:"Original Payment Method"},
  {id:"pay-path-legends",ownerId:"demo",serviceType:"League",serviceId:"path-of-legends",serviceName:"Path of Legends · Season 3",amount:10000,currency:"NGN",paidAt:"2026-08-16T14:12:00.000Z",reference:"SCA-LEAGUE-POL-260816",status:"Partially Refunded",eligibility:"Partially Refundable",refundedAmount:4000,method:"Original Payment Method"},
  {id:"pay-old-cup",ownerId:"demo",serviceType:"Tournament",serviceId:"old-cup",serviceName:"SCA Summer Open",amount:1500,currency:"NGN",paidAt:"2026-06-02T09:00:00.000Z",reference:"SCA-SUMMER-260602",status:"Fully Refunded",eligibility:"Already Refunded",refundedAmount:1500,method:"Original Payment Method"}
];

export const money=(amount=0,currency="NGN")=>new Intl.NumberFormat("en-NG",{style:"currency",currency,maximumFractionDigits:0}).format(amount);
export const getPayments=()=>{const stored=read(PAYMENTS_KEY);if(!stored.length)write(PAYMENTS_KEY,seedPayments);return stored.length?stored:seedPayments};
export const savePayments=payments=>write(PAYMENTS_KEY,payments);
export const recordPayment=payment=>{if(!payment?.reference||payment.reference==="FREE")return null;const existing=getPayments();const found=existing.find(item=>item.reference===payment.reference);if(found)return found;const record={id:`pay-${Date.now()}`,...payment,paidAt:payment.paidAt||new Date().toISOString(),status:"Paid",eligibility:payment.eligibility||"Eligible",refundedAmount:0,method:"Original Payment Method"};savePayments([record,...existing]);return record};
export const getRefunds=()=>read(REFUNDS_KEY);
export const saveRefunds=refunds=>write(REFUNDS_KEY,refunds);
export const getRefund=id=>getRefunds().find(item=>item.id===id||item.reference===id);
export const activeRefundForPayment=paymentId=>getRefunds().find(item=>item.paymentId===paymentId&&!['Rejected','Refunded','Failed','Cancelled'].includes(item.status));
export const createRefund=request=>{if(activeRefundForPayment(request.paymentId))return null;const refunds=getRefunds();const reference=`SCA-RFD-${String(refunds.length+124).padStart(6,"0")}`;const refund={id:`refund-${Date.now()}`,reference,status:"Requested",requestedAt:new Date().toISOString(),completedAt:null,approvedAmount:null,adminReason:"",timeline:[{status:"Requested",date:new Date().toISOString()}],...request};saveRefunds([refund,...refunds]);return refund};
export const cancelRefund=id=>{const next=getRefunds().map(item=>item.id===id&&["Requested","Under Review"].includes(item.status)?{...item,status:"Cancelled",timeline:[...item.timeline,{status:"Cancelled",date:new Date().toISOString()}]}:item);saveRefunds(next);return next.find(item=>item.id===id)};
export const refundStatuses=["Requested","Under Review","Approved","Rejected","Processing","Refunded","Failed","Cancelled"];
