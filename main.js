/*
* WAREHOUSE OPTIMIZATION
*
* Please do not post your solution to this problem online (Git, etc.) Please keep the solution
* in Dropbox folder we shared with you.
*
* At ACME warehouse the warehouse manager has observed orders taking a long time to pick and
*  believes that moving more popular items to easier to access locations may help.
*
* - Workers pick an order by placing items on a pallet at the dock door.
* - Products are stored (inefficiently) in a single aisle with multiple shelves.
* - As the shelf number increases, it is located further down the aisle and
*   further away from the dock door.
* - On average it takes 5*X seconds for a warehouse worker to retrieve an item
*   from shelf X and place it on the pallet.
* - A warehouse worker can only carry a single item at a time.
* - A shelf can only hold one type of item.
*
* Which items should be on which shelves to optimize picking speed based on
*  yesterday's orders?
* 
* Example table contents:
*
*   Shelf 1:      Item 12
*   Shelf 2:      Item 11
*   Shelf 3:      Item 10
*   Shelf 4:      Item 09
*   Shelf 5:      Item 08
*   Shelf 6:      Item 07
*   Shelf 7:      Item 06
*   Shelf 8:      Item 05
*   Shelf 9:      Item 04
*   Shelf 10:     Item 03
*   Shelf 11:     Item 02
*   Shelf 12:     Item 01
*
* Display the shelf and item pairings by calling the following function:
*   displayShelfItemPair(shelfName, itemName);
* 
*/

function main() {

    var orderRepo = new OrderRepository();
    let newOrder = orderRepo.getYesterdaysOrders()
    // Your code here
    //Shelf
    function shelfFunction() {
        for (count = 0; count < newOrder.length; count++) {
            console.log("Shelf Number : " + (1 + count));

        }
    }

    //Item
    function itemFunction() {
        // console.log(orderRepo.getYesterdaysOrders())
        


        for (i = 0; i < newOrder.length; i++) {
            let newerOrder = orderRepo.getYesterdaysOrders()[i]
            let ordersNew = newerOrder.orderLines


            let sortOrders = ordersNew.sort((a, b) => {
                if (a.quantity > b.quantity) return -1
                else if (b.quantity > a.quantity) return 1
                else return 0
            })
            
            for (let i = 0; i < ordersNew.length; i++) {
                console.log(ordersNew)
                // displayShelfItemPair(ordersNew, ordersNew[i].itemName)
                
            }
        }
        // console.log(newOrder)
        // console.log("It didn't break!")
    }

    // shelfFunction(newOrder)

    //Vars
    let shelfName = shelfFunction(newOrder)
    let itemName = itemFunction(orderRepo)


    function displayShelfItemPair(shelfName, itemName) {

    }
    displayShelfItemPair(shelfName, itemName)
}