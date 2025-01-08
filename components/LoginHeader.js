import React from "react";
import Link from "next/link";

const LoginHeader = () => {
  return (
    <>
    
    <header>
    <div className="contain">
      <div className="logo">
        <Link href="/">
          <img
            src="images/logo.svg"
            width={200}
            height={100}
            alt="Website Logo"
          />
        </Link>
      </div>
      <button type="button" className="toggle" aria-label="Toggle Button">
        <span />
      </button>
      <div className="head_strip">
        <form action="" method="post" id="query_form">
          <input
            type="text"
            name=""
            id=""
            className="input"
            placeholder="Search...."
          />
          <button type="submit">
            <img
              src="images/icon-search.svg"
              width={60}
              height={60}
              alt="Search Icon"
            />
          </button>
        </form>
        <div className="btn_blk">
          {/* <Link href="signin" class="site_btn blank stroke logon_btn">Sign up | Sign in</Link> */}
          <button type="button" className="buy_sell_btn">
            Buy/Sell
          </button>
        </div>
        <div id="lang" className="dropdown">
          <button type="button">
            <img
              src="images/flag-usa.svg"
              width={100}
              height={100}
              alt="USA FLAG"
            />
          </button>
        </div>
        <ul id="icon_list">
          <li className="dropdown">
            <button
              type="button"
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img
                src="images/icon-user.svg"
                width={60}
                height={60}
                alt="User Icon"
              />
            </button>
            <ul className="account_dropdown dropdown-menu">
              <li>
                <Link href="account">Account</Link>
              </li>
              <li>
                <Link href="notifications">Notifications</Link>
              </li>
              <li>
                <Link href="orders">Orders</Link>
              </li>
              <li>
                <Link href="wishlist">Wishlist</Link>
              </li>
              <li>
                <Link href="addresses">Addresses</Link>
              </li>
              <li>
                <Link href="compare">Compare</Link>
              </li>
              <li>
                <Link href="my-products">My Products</Link>
              </li>
              <li>
                <Link href="signin">Sign out</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="wishlist" type="button">
              <img
                src="images/icon-heart.svg"
                width={60}
                height={60}
                alt="Heart Icon"
              />
            </Link>
          </li>
          <li>
            <button type="button">
              <img
                src="images/icon-cart.svg"
                width={60}
                height={60}
                alt="Cart Icon"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
    <nav>
      <div className="contain">
        <div id="nav">
          <ul>
            <li className="drop">
              <Link href="javascript:void(0)">Mens</Link>
              <div id="mega__menu__list">
                <ul>
                  <li>
                    <Link href="catalog" className="h6">
                      Categories
                    </Link>
                    <ul>
                      <li>
                        <Link href="catalog">COATS &amp; JACKETS</Link>
                      </li>
                      <li>
                        <Link href="catalog">COATS</Link>
                      </li>
                      <li>
                        <Link href="catalog">BOMBER JACKETS</Link>
                      </li>
                      <li>
                        <Link href="catalog">DENIM JACKETS</Link>
                      </li>
                      <li>
                        <Link href="catalog">DOWN JACKETS</Link>
                      </li>
                      <li>
                        <Link href="catalog">LEATHER JACKETS</Link>
                      </li>
                      <li>
                        <Link href="catalog">SPORTS &amp; WINDBREAKERS</Link>
                      </li>
                      <li>
                        <Link href="catalog">SUITS &amp; BLAZERS</Link>
                      </li>
                      <li>
                        <Link href="catalog">VESTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">T-SHIRTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">SWEATSHIRTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">HOODIES</Link>
                      </li>
                      <li>
                        <Link href="catalog">SHIRTS</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link href="catalog">KNIT SWEATERS</Link>
                      </li>
                      <li>
                        <Link href="catalog">CARDIGANS</Link>
                      </li>
                      <li>
                        <Link href="catalog">POLOS</Link>
                      </li>
                      <li>
                        <Link href="catalog">TOPS</Link>
                      </li>
                      <li>
                        <Link href="catalog">JEANS</Link>
                      </li>
                      <li>
                        <Link href="catalog">PANTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">CASUAL &amp; CARGO PANTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">SWEATPANTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">TRACK PANTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">SHORTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">ACTIVE &amp; UNDERWEAR</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="catalog" className="h6">
                      Brands
                    </Link>
                    <ul>
                      <li>
                        <Link href="catalog">1017 ALYX 9SM</Link>
                      </li>
                      <li>
                        <Link href="catalog">A-COLD-WALL*</Link>
                      </li>
                      <li>
                        <Link href="catalog">ALEXANDER McQUEEN</Link>
                      </li>
                      <li>
                        <Link href="catalog">AMBUSH</Link>
                      </li>
                      <li>
                        <Link href="catalog">AMIRI</Link>
                      </li>
                      <li>
                        <Link href="catalog">BALENCIAGA</Link>
                      </li>
                      <li>
                        <Link href="catalog">BALMAIN</Link>
                      </li>
                      <li>
                        <Link href="catalog">DOUBLET</Link>
                      </li>
                      <li>
                        <Link href="catalog">EGON LAB</Link>
                      </li>
                      <li>
                        <Link href="catalog">GIVENCHY</Link>
                      </li>
                      <li>
                        <Link href="catalog">HERON PRESTON</Link>
                      </li>
                      <li>
                        <Link href="catalog">JACQUEMUS</Link>
                      </li>
                      <li>
                        <Link href="catalog">JUUN.J</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link href="catalog">KENZO</Link>
                      </li>
                      <li>
                        <Link href="catalog">LOEWE</Link>
                      </li>
                      <li>
                        <Link href="catalog">MAISON MARGIELA</Link>
                      </li>
                      <li>
                        <Link href="catalog">MARCELO BURLON</Link>
                      </li>
                      <li>
                        <Link href="catalog">MARNI</Link>
                      </li>
                      <li>
                        <Link href="catalog">MASTERMIND JAPAN</Link>
                      </li>
                      <li>
                        <Link href="catalog">MASTERMIND WORLD</Link>
                      </li>
                      <li>
                        <Link href="catalog">OFF-WHITE</Link>
                      </li>
                      <li>
                        <Link href="catalog">PALM ANGELS</Link>
                      </li>
                      <li>
                        <Link href="catalog">REPRESENT</Link>
                      </li>
                      <li>
                        <Link href="catalog">RICK OWENS</Link>
                      </li>
                      <li>
                        <Link href="catalog">DRKSHDW</Link>
                      </li>
                      <li>
                        <Link href="catalog">SACAI</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link href="catalog">WE11DONE</Link>
                      </li>
                      <li>
                        <Link href="catalog">WOOYOUNGMI</Link>
                      </li>
                      <li>
                        <Link href="catalog">Y-3</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="catalog" className="h6">
                      Latest Product
                    </Link>
                    <div className="nav_product">
                      <div className="image">
                        <Link href="catalog">
                          <img src="images/products/01.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="text">
                        <div className="brand">OFF-WHITE</div>
                        <div className="title">
                          <Link href="catalog">
                            Moon Varsity Leather Jacket in Black
                          </Link>
                        </div>
                        <div className="price">$1,216</div>
                      </div>
                    </div>
                    <div className="nav_product">
                      <div className="image">
                        <Link href="catalog">
                          <img src="images/products/02.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="text">
                        <div className="brand">MARNI</div>
                        <div className="title">
                          <Link href="catalog">
                            Mega Marni Bowling Shirt in Lily White
                          </Link>
                        </div>
                        <div className="price">$103</div>
                      </div>
                    </div>
                    <div className="nav_product">
                      <div className="image">
                        <Link href="catalog">
                          <img src="images/products/03.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="text">
                        <div className="brand">MAISON MARGIELA</div>
                        <div className="title">
                          <Link href="catalog">
                            Deconstruction Bomber Jacket in Beige
                          </Link>
                        </div>
                        <div className="price">$657</div>
                      </div>
                    </div>
                    <div className="nav_product">
                      <div className="image">
                        <Link href="catalog">
                          <img src="images/products/04.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="text">
                        <div className="brand">BALENCIAGA</div>
                        <div className="title">
                          <Link href="catalog">
                            Bootcut Pants in Blue Light Ring
                          </Link>
                        </div>
                        <div className="price">$323</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="drop">
              <Link href="javascript:void(0)">Womans</Link>
              <div id="mega__menu__list">
                <ul>
                  <li>
                    <Link href="catalog" className="h6">
                      Categories
                    </Link>
                    <ul>
                      <li>
                        <Link href="catalog">KNIT SWEATERS</Link>
                      </li>
                      <li>
                        <Link href="catalog">CARDIGANS</Link>
                      </li>
                      <li>
                        <Link href="catalog">POLOS</Link>
                      </li>
                      <li>
                        <Link href="catalog">TOPS</Link>
                      </li>
                      <li>
                        <Link href="catalog">JEANS</Link>
                      </li>
                      <li>
                        <Link href="catalog">PANTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">CASUAL &amp; CARGO PANTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">SWEATPANTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">TRACK PANTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">SHORTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">ACTIVE &amp; UNDERWEAR</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="catalog" className="h6">
                      Brands
                    </Link>
                    <ul>
                      <li>
                        <Link href="catalog">KENZO</Link>
                      </li>
                      <li>
                        <Link href="catalog">LOEWE</Link>
                      </li>
                      <li>
                        <Link href="catalog">MAISON MARGIELA</Link>
                      </li>
                      <li>
                        <Link href="catalog">MARCELO BURLON</Link>
                      </li>
                      <li>
                        <Link href="catalog">MARNI</Link>
                      </li>
                      <li>
                        <Link href="catalog">MASTERMIND JAPAN</Link>
                      </li>
                      <li>
                        <Link href="catalog">MASTERMIND WORLD</Link>
                      </li>
                      <li>
                        <Link href="catalog">OFF-WHITE</Link>
                      </li>
                      <li>
                        <Link href="catalog">PALM ANGELS</Link>
                      </li>
                      <li>
                        <Link href="catalog">REPRESENT</Link>
                      </li>
                      <li>
                        <Link href="catalog">RICK OWENS</Link>
                      </li>
                      <li>
                        <Link href="catalog">DRKSHDW</Link>
                      </li>
                      <li>
                        <Link href="catalog">SACAI</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link href="catalog">1017 ALYX 9SM</Link>
                      </li>
                      <li>
                        <Link href="catalog">A-COLD-WALL*</Link>
                      </li>
                      <li>
                        <Link href="catalog">ALEXANDER McQUEEN</Link>
                      </li>
                      <li>
                        <Link href="catalog">AMBUSH</Link>
                      </li>
                      <li>
                        <Link href="catalog">AMIRI</Link>
                      </li>
                      <li>
                        <Link href="catalog">BALENCIAGA</Link>
                      </li>
                      <li>
                        <Link href="catalog">BALMAIN</Link>
                      </li>
                      <li>
                        <Link href="catalog">DOUBLET</Link>
                      </li>
                      <li>
                        <Link href="catalog">EGON LAB</Link>
                      </li>
                      <li>
                        <Link href="catalog">GIVENCHY</Link>
                      </li>
                      <li>
                        <Link href="catalog">HERON PRESTON</Link>
                      </li>
                      <li>
                        <Link href="catalog">JACQUEMUS</Link>
                      </li>
                      <li>
                        <Link href="catalog">JUUN.J</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link href="catalog">BALMAIN</Link>
                      </li>
                      <li>
                        <Link href="catalog">DOUBLET</Link>
                      </li>
                      <li>
                        <Link href="catalog">EGON LAB</Link>
                      </li>
                      <li>
                        <Link href="catalog">GIVENCHY</Link>
                      </li>
                      <li>
                        <Link href="catalog">HERON PRESTON</Link>
                      </li>
                      <li>
                        <Link href="catalog">WE11DONE</Link>
                      </li>
                      <li>
                        <Link href="catalog">WOOYOUNGMI</Link>
                      </li>
                      <li>
                        <Link href="catalog">Y-3</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="catalog" className="h6">
                      Latest Product
                    </Link>
                    <div className="nav_product">
                      <div className="image">
                        <Link href="catalog">
                          <img src="images/products/05.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="text">
                        <div className="brand">OFF-WHITE</div>
                        <div className="title">
                          <Link href="catalog">
                            Moon Varsity Leather Jacket in Black
                          </Link>
                        </div>
                        <div className="price">$1,216</div>
                      </div>
                    </div>
                    <div className="nav_product">
                      <div className="image">
                        <Link href="catalog">
                          <img src="images/products/06.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="text">
                        <div className="brand">MARNI</div>
                        <div className="title">
                          <Link href="catalog">
                            Mega Marni Bowling Shirt in Lily White
                          </Link>
                        </div>
                        <div className="price">$103</div>
                      </div>
                    </div>
                    <div className="nav_product">
                      <div className="image">
                        <Link href="catalog">
                          <img src="images/products/07.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="text">
                        <div className="brand">MAISON MARGIELA</div>
                        <div className="title">
                          <Link href="catalog">
                            Deconstruction Bomber Jacket in Beige
                          </Link>
                        </div>
                        <div className="price">$657</div>
                      </div>
                    </div>
                    <div className="nav_product">
                      <div className="image">
                        <Link href="catalog">
                          <img src="images/products/08.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="text">
                        <div className="brand">BALENCIAGA</div>
                        <div className="title">
                          <Link href="catalog">
                            Bootcut Pants in Blue Light Ring
                          </Link>
                        </div>
                        <div className="price">$323</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="
              drop"
            >
              <Link href="javascript:void(0)">Kids</Link>
              <div id="mega__menu__list">
                <ul>
                  <li>
                    <Link href="catalog" className="h6">
                      Categories
                    </Link>
                    <ul>
                      <li>
                        <Link href="catalog">KNIT SWEATERS</Link>
                      </li>
                      <li>
                        <Link href="catalog">CARDIGANS</Link>
                      </li>
                      <li>
                        <Link href="catalog">POLOS</Link>
                      </li>
                      <li>
                        <Link href="catalog">TOPS</Link>
                      </li>
                      <li>
                        <Link href="catalog">JEANS</Link>
                      </li>
                      <li>
                        <Link href="catalog">PANTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">CASUAL &amp; CARGO PANTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">SWEATPANTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">TRACK PANTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">SHORTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">ACTIVE &amp; UNDERWEAR</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link href="catalog">T-SHIRTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">SWEATSHIRTS</Link>
                      </li>
                      <li>
                        <Link href="catalog">HOODIES</Link>
                      </li>
                      <li>
                        <Link href="catalog">SHIRTS</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="catalog" className="h6">
                      Brands
                    </Link>
                    <ul>
                      <li>
                        <Link href="catalog">1017 ALYX 9SM</Link>
                      </li>
                      <li>
                        <Link href="catalog">A-COLD-WALL*</Link>
                      </li>
                      <li>
                        <Link href="catalog">ALEXANDER McQUEEN</Link>
                      </li>
                      <li>
                        <Link href="catalog">AMBUSH</Link>
                      </li>
                      <li>
                        <Link href="catalog">AMIRI</Link>
                      </li>
                      <li>
                        <Link href="catalog">BALENCIAGA</Link>
                      </li>
                      <li>
                        <Link href="catalog">BALMAIN</Link>
                      </li>
                      <li>
                        <Link href="catalog">DOUBLET</Link>
                      </li>
                      <li>
                        <Link href="catalog">EGON LAB</Link>
                      </li>
                      <li>
                        <Link href="catalog">GIVENCHY</Link>
                      </li>
                      <li>
                        <Link href="catalog">HERON PRESTON</Link>
                      </li>
                      <li>
                        <Link href="catalog">JACQUEMUS</Link>
                      </li>
                      <li>
                        <Link href="catalog">JUUN.J</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="catalog" className="h6">
                      Latest Product
                    </Link>
                    <div className="nav_product">
                      <div className="image">
                        <Link href="catalog">
                          <img src="images/products/09.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="text">
                        <div className="brand">OFF-WHITE</div>
                        <div className="title">
                          <Link href="catalog">
                            Moon Varsity Leather Jacket in Black
                          </Link>
                        </div>
                        <div className="price">$1,216</div>
                      </div>
                    </div>
                    <div className="nav_product">
                      <div className="image">
                        <Link href="catalog">
                          <img src="images/products/10.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="text">
                        <div className="brand">MARNI</div>
                        <div className="title">
                          <Link href="catalog">
                            Mega Marni Bowling Shirt in Lily White
                          </Link>
                        </div>
                        <div className="price">$103</div>
                      </div>
                    </div>
                    <div className="nav_product">
                      <div className="image">
                        <Link href="catalog">
                          <img src="images/products/11.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="text">
                        <div className="brand">MAISON MARGIELA</div>
                        <div className="title">
                          <Link href="catalog">
                            Deconstruction Bomber Jacket in Beige
                          </Link>
                        </div>
                        <div className="price">$657</div>
                      </div>
                    </div>
                    <div className="nav_product">
                      <div className="image">
                        <Link href="catalog">
                          <img src="images/products/12.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="text">
                        <div className="brand">BALENCIAGA</div>
                        <div className="title">
                          <Link href="catalog">
                            Bootcut Pants in Blue Light Ring
                          </Link>
                        </div>
                        <div className="price">$323</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="">
              <Link href="trainers">Trainers</Link>
            </li>
            <li className="">
              <Link href="vintage">Vintage</Link>
            </li>
            <li className="">
              <Link href="accessories">Accessories</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  {/* header */}
  </>
  
  );
};

export default LoginHeader;
