using System;
using System.Runtime.Serialization;
using System.Text;

namespace Core.Entities.OrderAggregate
{
    public enum OrderStatus
    {
        [EnumMember(Value = "Pending")] 
        Pending,
        [EnumMember(Value = "Payment Received")]
        Paymentreceived,
        [EnumMember(Value = "Payment Failed")]
        PaymentFailed
    }
}
