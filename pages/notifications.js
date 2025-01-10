import React from "react";


export default function Notifications() {
  return (
    <>
      
      <section id="notifications">
    <div className="contain sm">
      <h3 className="mb-4">Notifications</h3>
      <div className="table_blk_wrap">
        <div className="table_blk">
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="noti_blk">
                    <div className="ico fill round">
                      <a href="?">
                        <img src="/images/users/01.webp" alt="" />
                      </a>
                    </div>
                    <div className="txt">
                      <h5>New Comment</h5>
                      <p>
                        Jannifer Kem commented on your order{" "}
                        <a href="?">click here</a> to view comment.
                      </p>
                    </div>
                  </div>
                </td>
                <td className="time text-end">2 hours ago</td>
              </tr>
              <tr>
                <td>
                  <div className="noti_blk">
                    <div className="ico fill round">
                      <a href="?">
                        <img src="/images/users/02.webp" alt="" />
                      </a>
                    </div>
                    <div className="txt">
                      <h5>Booking Request</h5>
                      <p>
                        You have a new booking request from Samira Jones{" "}
                        <a href="?">Accept</a> or <a href="?">Decline</a>
                      </p>
                    </div>
                  </div>
                </td>
                <td className="time text-end">7 hours ago</td>
              </tr>
              <tr>
                <td>
                  <div className="noti_blk">
                    <div className="ico fill round">
                      <a href="?">
                        <img src="/images/users/03.webp" alt="" />
                      </a>
                    </div>
                    <div className="txt">
                      <h5>New Order</h5>
                      <p>
                        You have created a new order for Jennifer Kem{" "}
                        <a href="?">click here</a> to view detail.
                      </p>
                    </div>
                  </div>
                </td>
                <td className="time text-end">Yesterday at 5:32 am</td>
              </tr>
              <tr>
                <td>
                  <div className="noti_blk">
                    <div className="ico fill round">
                      <a href="?">
                        <img src="/images/users/04.webp" alt="" />
                      </a>
                    </div>
                    <div className="txt">
                      <h5>New Order</h5>
                      <p>
                        John Wick send a new order to you{" "}
                        <a href="?">click here</a> to view detail.
                      </p>
                    </div>
                  </div>
                </td>
                <td className="time text-end">Yesterday at 5:32 am</td>
              </tr>
              <tr>
                <td>
                  <div className="noti_blk">
                    <div className="ico fill round">
                      <a href="?">
                        <img src="/images/users/05.webp" alt="" />
                      </a>
                    </div>
                    <div className="txt">
                      <h5>Leave a Review</h5>
                      <p>
                        Leave a review on your experience with Jennifer Kem{" "}
                        <a href="?">click here</a>
                      </p>
                    </div>
                  </div>
                </td>
                <td className="time text-end">Yesterday at 6:20 am</td>
              </tr>
              <tr>
                <td>
                  <div className="noti_blk">
                    <div className="ico fill round">
                      <a href="?">
                        <img src="/images/users/06.webp" alt="" />
                      </a>
                    </div>
                    <div className="txt">
                      <h5>Rated a Review</h5>
                      <p>You rated Jennifer Kem with 5 stars.</p>
                    </div>
                  </div>
                </td>
                <td className="time text-end">Yesterday at 5:32 am</td>
              </tr>
              <tr>
                <td>
                  <div className="noti_blk">
                    <div className="ico fill round">
                      <a href="?">
                        <img src="/images/users/07.webp" alt="" />
                      </a>
                    </div>
                    <div className="txt">
                      <h5>New Comment</h5>
                      <p>
                        Jannifer Kem commented on your order{" "}
                        <a href="?">click here</a> to view comment.
                      </p>
                    </div>
                  </div>
                </td>
                <td className="time text-end">March 18 at 8:22 p.m.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table_pagination">
          <p>Showing 1 to 9 of 200 entries</p>
          <div className="pagination">
            <ul>
              <li>
                <button type="button" className="prev" />
              </li>
              <li className="active">
                <a href="?">1</a>
              </li>
              <li>
                <a href="?">2</a>
              </li>
              <li>
                <a href="?">3</a>
              </li>
              <li>
                <a href="?">...</a>
              </li>
              <li>
                <a href="?">50</a>
              </li>
              <li>
                <button type="button" className="next" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* account */}

</>

     
  );
}
