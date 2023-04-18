import React from "react";
import styles from "./Footer.module.scss";
import AppStoreIcon from "../Icons/MobileApp/AppStoreIcon";
import GooglePlayIcon from "../Icons/MobileApp/GooglePlayIcon";
import AppGalleryIcon from "../Icons/MobileApp/AppGalleryIcon";
import VkIcon from "../Icons/Social/VkIcon";
import TelegramIcon from "../Icons/Social/TelegramIcon";
import YouTubeIcon from "../Icons/Social/YouTubeIcon";


function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <span className={styles.title}>Wok And Rolls</span>
          <ul className={styles.list}>
            <li>
              <a href="https://dodopizza.ru/" className={styles.link}>
                О компании
              </a>
            </li>
            <li>
              <a href="https://dodopizza.ru/" className={styles.link}>
                Вакансии
              </a>
            </li>
            <li>
              <a href="https://dodopizza.ru/" className={styles.link}>
                Поставщикам и партнерам
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <span className={styles.title}>Правовая информация</span>
          <ul className={styles.list}>
            <li>
              <a href="https://dodopizza.ru/" className={styles.link}>
                Пользовательское соглашение
              </a>
            </li>
            <li>
              <a href="https://dodopizza.ru/" className={styles.link}>
                Лицензионное соглашение
              </a>
            </li>
            <li>
              <a href="https://dodopizza.ru/" className={styles.link}>
                Политика обработки персональных данных
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <span className={styles.title}>Помощь</span>
          <ul className={styles.list}>
            <li>
              <a href="https://dodopizza.ru/" className={styles.link}>
                Служба поддержки
              </a>
            </li>
            <li>
              <a href="https://dodopizza.ru/" className={styles.link}>
                Call-центр службы доставки
              </a>
            </li>
            <li>
              <a href="https://dodopizza.ru/" className={styles.link}>
                Часто задаваемые вопросы
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <span className={styles.title}>
           Заказывайте в приложении
          </span>
          <div className={styles.mobile_app_links}>
            <a href="https://dodopizza.ru/" className={styles.mobile_link}><div  className={styles.mobile_link_icons}><AppStoreIcon/></div><span>Загрузить в AppStore</span></a>
            <a href="https://dodopizza.ru/" className={styles.mobile_link}><div className={styles.mobile_link_icons}><GooglePlayIcon/></div> <span>Скачать в GooglePlay</span></a>
            <a href="https://dodopizza.ru/" className={styles.mobile_link}><div className={styles.mobile_link_icons}><AppGalleryIcon/></div> <span>Открыть в AppGallery</span></a>
           
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <span className={styles.copiright}>Wok And Rolls ©2023</span>
        <div className={styles.social}>
          <span className={styles.social_title}>Общайтесь с нами в:</span>
          <div className={styles.social_icons}>
          <a href="https://dodopizza.ru/" className={styles.social_link}><VkIcon/></a>
          <a href="https://dodopizza.ru/" className={styles.social_link}><TelegramIcon/></a>
          <a href="https://dodopizza.ru/" className={styles.social_link}><YouTubeIcon className={styles.youtube_icon}/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
