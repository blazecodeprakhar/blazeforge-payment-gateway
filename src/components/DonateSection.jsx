export default function DonateSection() {
  const handleDonateClick = (amount) => {
    const modal = document.getElementById('qrModal');
    const qrImage = document.getElementById('qrImage');
    const payLink = document.getElementById('payLink');
    qrImage.classList.add('blurred');

    switch (amount) {
      case 25:
        payLink.href = 'upi://pay?pa=prakharyadav096@okhdfcbank&pn=Prakhar%20Yadav&am=25.00&cu=INR&aid=uGICAgMDhi87QVQ';
        break;
      case 50:
        payLink.href = 'upi://pay?pa=prakharyadav096@okhdfcbank&pn=Prakhar%20Yadav&am=50.00&cu=INR&aid=uGICAgMDhi87QVQ';
        break;
      case 75:
        payLink.href = 'upi://pay?pa=prakharyadav096@okhdfcbank&pn=Prakhar%20Yadav&am=75.00&cu=INR&aid=uGICAgMDhi87QVQ';
        break;
      case 100:
        payLink.href = 'upi://pay?pa=prakharyadav096@okhdfcbank&pn=Prakhar%20Yadav&am=100.00&cu=INR&aid=uGICAgMDhi87QVQ';
        break;
    }

    modal.classList.add('active');
  };

  const closeModal = () => {
    document.getElementById('qrModal').classList.remove('active');
  };

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Support BlazeForge 💖</h2>
        <p className="text-lg mb-8">Buy us a coffee ☕ and help power more awesome projects!</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[25, 50, 75, 100].map((amount) => (
            <button
              key={amount}
              onClick={() => handleDonateClick(amount)}
              className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-md py-4 hover:scale-105 transition text-xl"
            >
              ₹{amount}
            </button>
          ))}
        </div>
      </section>

      <div
        id="qrModal"
        className="modal fixed inset-0 bg-black bg-opacity-70 justify-center items-center z-50 hidden"
      >
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-80 text-center relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-3 text-2xl text-gray-600 dark:text-gray-300"
          >
            &times;
          </button>
          <img
            id="qrImage"
            src="/qr.jpeg"
            alt="QR Code"
            className="mx-auto rounded-lg blurred transition"
          />
          <button
            onClick={() =>
              document.getElementById('qrImage').classList.remove('blurred')
            }
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Show QR
          </button>
          <a
            href="#"
            id="payLink"
            target="_blank"
            className="block mt-2 text-blue-600 underline"
          >
            Click here to pay
          </a>
        </div>
      </div>
    </>
  );
}
