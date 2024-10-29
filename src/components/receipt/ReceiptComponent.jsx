import "./ReceiptComponent.css";
function ReceiptComponent() {
  return (
    <div class='receipt'>
      <h2 class='receipt-title'>Receipt</h2>
      <div class='receipt-details'>
        <p>
          <strong>Date:</strong> 26/10/2024 02:59:11 pm
        </p>
        <p>
          <strong>Customer:</strong> test
        </p>
        <p>
          <strong>Transaction ID:</strong> NBZVGNnwOwfzd9
        </p>
        <p>
          <strong>UTR:</strong>
        </p>
        <p>
          <strong>Account Number:</strong> 3412662118
        </p>
        <p>
          <strong>IFSC Code:</strong> KKBK0007457
        </p>
        <p>
          <strong>Txn Status:</strong> SUCCESS
        </p>
      </div>

      <table class='receipt-table'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quick Transfer</td>
            <td>₹100</td>
          </tr>
          <tr>
            <td>Q-Transfer charge</td>
            <td>₹0</td>
          </tr>
          <tr class='total-row'>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>₹100</strong>
            </td>
          </tr>
        </tbody>
      </table>

      <div class='receipt-footer'>
        <p>Thank you for using our services!</p>
        <p>
          Please contact us at{" "}
          <a href='mailto:support@sotruepay.com'>support@sotruepay.com</a> for
          any inquiries.
        </p>
      </div>
    </div>
  );
}

export default ReceiptComponent;
