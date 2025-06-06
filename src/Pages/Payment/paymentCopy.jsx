import React, { useContext, useState, useEffect } from 'react';
import Layout from '../../Components/Layout/Layout';
import classes from './Order.module.css';
import { db } from '../../Utility/firebase';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';

function Orders() {
  const context = useContext(DataContext);
  const user = context?.state?.user;
  const dispatch = context?.dispatch;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data:doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your orders</h2>
          {orders?.length == 0&& <div style={{padding: "20px"}}> You don't have orders yet. </div>}
          {/* order items */}
          <div>
          {orders?.map((eachOrder, i) => (
            <div key={i}>
              <hr />
              <p>Order ID: {eachOrder?.id}</p>
              {eachOrder?.data?.basket?.map((orderItem) => (
                <ProductCard
                  flex={true}
                  product={orderItem}
                  key={orderItem.id}
                />
              ))}
            </div>
          ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;

