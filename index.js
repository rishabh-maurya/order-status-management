const statusBlocks = document.getElementsByClassName('status-blocks');
const addDoneClass = (index) => statusBlocks[index].classList.add('done');
const orderIdInfo = document.getElementById('order-id-info');

const excuteOrder = (callback) => {
    const orderId = document.getElementById('order-id-input').value;
    orderIdInfo.innerText = 'Status for order ID: ' + orderId;
    addDoneClass(0)

    setTimeout(() => {
        addDoneClass(1)

        setTimeout(() => {
            addDoneClass(2)

            setTimeout(() => {
                addDoneClass(3)

                setTimeout(() => {
                    addDoneClass(4)

                    setTimeout(() => {
                        addDoneClass(5)

                        setTimeout(() => {
                            addDoneClass(6)

                            setTimeout(() => {
                                addDoneClass(7)

                                setTimeout(() => {
                                    addDoneClass(8)
                                }, 2000);
                            }, 10000);
                        }, 5000);
                    }, 12000);
                }, 5000);
            }, 15000)
        }, 8000);
    }, 2000)
}