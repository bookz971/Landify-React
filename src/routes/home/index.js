import { h } from 'preact'

import { Helmet } from 'react-helmet'

import StoreBanner from '../../components/store-banner'
import PrimaryButton from '../../components/primary-button'
import FeatureCard from '../../components/feature-card'
import TestimonialsCard from '../../components/testimonials-card'
import StatsCard from '../../components/stats-card'
import LinkIconButton from '../../components/link-icon-button'
import projectStyles from '../../global-style.module.css'
import styles from './style.css'

const Home = (props) => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>Landify</title>
        <meta property="og:title" content="Landify" />
      </Helmet>
      <div data-role="Header" class={styles['header-container']}>
        <header class={styles['header']}>
          <div class={styles['logo']}>
            <img
              alt="image"
              src="/assets/playground_assets/logotype-dark.svg"
              class={styles['image']}
            />
          </div>
          <div class={styles['menu']}>
            <span class={styles['text']}>About</span>
            <span class={styles['text01']}>Products</span>
            <span class={styles['text02']}>Pricing</span>
            <span class={styles['text03']}>Blog</span>
            <span class={styles['text04']}>Jobs</span>
            <span class={styles['text05']}>More</span>
            <svg viewBox="0 0 1024 1024" class={styles['icon']}>
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
          </div>
          <div class={styles['container01']}>
            <StoreBanner></StoreBanner>
          </div>
          <div data-role="BurgerMenu" class={styles['burger-menu']}>
            <svg viewBox="0 0 1024 1024" class={styles['menu1']}>
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
        </header>
        <div data-role="MobileMenu" class={styles['mobile-menu']}>
          <div class={styles['top']}>
            <div class={styles['logo1']}>
              <img
                alt="image"
                src="/assets/playground_assets/logotype-dark.svg"
                class={styles['image01']}
              />
            </div>
            <div data-role="CloseMobileMenu" class={styles['close-menu']}>
              <svg viewBox="0 0 1024 1024" class={styles['icon05']}>
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div class={styles['mid']}>
            <span class={styles['text06']}>About</span>
            <span class={styles['text07']}>Products</span>
            <span class={styles['text08']}>Pricing</span>
            <span class={styles['text09']}>Blog</span>
            <span class={styles['text10']}>Jobs</span>
            <span class={styles['text11']}>More</span>
          </div>
          <div class={styles['bot']}>
            <div class={styles['container02']}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                class={styles['link']}
              >
                <div class={styles['container03']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class={styles['icon07']}
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                class={styles['link1']}
              >
                <div class={styles['container04']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class={styles['icon09']}
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                class={styles['link2']}
              >
                <div class={styles['container05']}>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    class={styles['icon11']}
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                class={styles['link3']}
              >
                <div class={styles['container06']}>
                  <svg viewBox="0 0 1024 1024" class={styles['icon13']}>
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class={styles['main']}>
        <div class={styles['blur-background']}></div>
        <div class={styles['hero']}>
          <div class={styles['container07']}>
            <h1 class={` ${styles['text12']} ${projectStyles['headline1']} `}>
              <span>Organize projects.</span>
              <br></br>
              <span>Get more55 done.</span>
            </h1>
            <PrimaryButton button="Get Started"></PrimaryButton>
          </div>
          <img
            alt="image"
            src="/assets/playground_assets/iphonex-1200w.png"
            class={styles['image02']}
          />
        </div>
        <img
          alt="image"
          src="/assets/playground_assets/turquoise-circle.svg"
          class={styles['turquoise-cirble']}
        />
        <img
          alt="image"
          src="/assets/playground_assets/purple-circle.svg"
          class={styles['purple-circle']}
        />
        <img
          alt="image"
          src="/assets/playground_assets/left.svg"
          class={styles['left']}
        />
        <img
          alt="image"
          src="/assets/playground_assets/right.svg"
          class={styles['right']}
        />
      </div>
      <div class={styles['clients']}>
        <div class={styles['divider']}></div>
        <img
          alt="image"
          src="/assets/playground_assets/logo-1.svg"
          class={styles['image03']}
        />
        <img
          alt="image"
          src="/assets/playground_assets/logo-4.svg"
          class={styles['image04']}
        />
        <img
          alt="image"
          src="/assets/playground_assets/logo-3.svg"
          class={styles['image05']}
        />
        <img
          alt="image"
          src="/assets/playground_assets/logo-5.svg"
          class={styles['image06']}
        />
        <img
          alt="image"
          src="/assets/playground_assets/logo-6.svg"
          class={styles['image07']}
        />
        <div class={styles['divider1']}></div>
      </div>
      <div class={styles['features']}>
        <h2 class={` ${projectStyles['headline2']} ${styles['text16']} `}>
          Tailor-made features
        </h2>
        <span class={styles['text17']}>
          <span class={styles['text18']}>
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
          </span>
        </span>
        <div class={styles['features1']}>
          <FeatureCard card_title="Robust workflow"></FeatureCard>
          <FeatureCard
            image_src="/assets/playground_assets/02.svg"
            card_title="Flexibility"
          ></FeatureCard>
          <FeatureCard
            image_src="/assets/playground_assets/03.svg"
            card_title="User friendly"
          ></FeatureCard>
          <FeatureCard
            image_src="/assets/playground_assets/04.svg"
            card_title="Multiple layouts"
          ></FeatureCard>
          <FeatureCard
            image_src="/assets/playground_assets/05.svg"
            card_title="Better compoents"
          ></FeatureCard>
          <FeatureCard
            image_src="/assets/playground_assets/06.svg"
            card_title="Well organized"
          ></FeatureCard>
        </div>
      </div>
      <div class={styles['testimonials']}>
        <div class={styles['container08']}>
          <div class={styles['container09']}>
            <img
              alt="image"
              src="/assets/playground_assets/quote-mark.svg"
              class={styles['image08']}
            />
            <h1 class={` ${styles['text19']} ${projectStyles['headline2']} `}>
              Real Stories from Real Customers
            </h1>
            <span>Get inspired by these stories.</span>
            <div class={styles['container10']}>
              <TestimonialsCard image_src="/assets/playground_assets/logo-4.svg"></TestimonialsCard>
            </div>
          </div>
          <div class={styles['container11']}>
            <div class={styles['container12']}>
              <TestimonialsCard
                src="/assets/playground_assets/logo-1.svg"
                text="I used Landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
                text1="Jane Cooper"
                text2="CEO, Airbnb"
                image_src="/assets/playground_assets/logo-1.svg"
              ></TestimonialsCard>
            </div>
            <div class={styles['container13']}>
              <TestimonialsCard
                text="Landify saved our time in designing my company page."
                text1="Kristin Watson"
                text2="Co-Founder, FedEx"
                image_src="/assets/playground_assets/logo-2.svg"
              ></TestimonialsCard>
            </div>
          </div>
        </div>
      </div>
      <div class={styles['achievements']}>
        <div class={styles['container14']}>
          <h2 class={styles['text21']}>
            <span class={styles['text22']}>
              Our 18 years of
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>achievements</span>
          </h2>
          <span class={styles['text25']}>
            <span class={styles['text26']}>
              With our super powers we have reached this
            </span>
          </span>
        </div>
        <div class={styles['container15']}>
          <div class={styles['container16']}>
            <StatsCard
              number="10,000+"
              image_src="/assets/playground_assets/01.svg"
              description="Downloads per day"
            ></StatsCard>
            <StatsCard
              number="2 Milion"
              image_src="/assets/playground_assets/04.svg"
              description="Users"
            ></StatsCard>
          </div>
          <div class={styles['container17']}>
            <StatsCard number="500+" description="Clients"></StatsCard>
            <StatsCard
              number="140"
              image_src="/assets/playground_assets/07.svg"
              description="Countries"
            ></StatsCard>
          </div>
        </div>
      </div>
      <div class={styles['feature1']}>
        <div class={styles['container18']}>
          <img
            alt="image"
            src="/assets/playground_assets/iphonex-1200w.png"
            image_src="/assets/playground_assets/iphonex-1200w.png"
            class={styles['image09']}
          />
        </div>
        <div class={styles['container19']}>
          <h3 class={projectStyles['headline3']}>Headline</h3>
          <span class={` ${styles['text28']} ${projectStyles['lead1']} `}>
            <span class={styles['text29']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </span>
          </span>
          <LinkIconButton text="Get Started"></LinkIconButton>
        </div>
      </div>
      <div class={styles['feature2']}>
        <div class={styles['container20']}>
          <h2 class={` ${projectStyles['headline2']} ${styles['text30']} `}>
            <span class={styles['text31']}>
              Enter the world of all fashion trends
            </span>
          </h2>
          <span class={` ${styles['text32']} ${projectStyles['lead1']} `}>
            <span class={styles['text33']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1535157412991-2ef801c1748b?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          image_src="/assets/playground_assets/iphonex-1200w.png"
          class={styles['image10']}
        />
      </div>
      <div class={styles['c-t-a']}>
        <div class={styles['container21']}>
          <div class={styles['container22']}>
            <h2 class={` ${projectStyles['headline2']} ${styles['text34']} `}>
              <span class={styles['text35']}>
                Manage your projects from your mobile
              </span>
            </h2>
            <span class={` ${styles['text36']} ${projectStyles['lead1']} `}>
              <span class={styles['text37']}>
                Download the app to manage your projects, keep track of the
                progress and complete tasks without procastinating. Stay on
                track and complete on time!
              </span>
            </span>
            <span class={` ${styles['text38']} ${projectStyles['subtitle2']} `}>
              <span class={styles['text39']}>Get the App</span>
            </span>
            <StoreBanner></StoreBanner>
          </div>
          <div class={styles['container23']}>
            <img
              alt="image"
              src="/assets/playground_assets/iphonex-1200w.png"
              image_src="/assets/playground_assets/iphonex-1200w.png"
              class={styles['image11']}
            />
            <img
              alt="image"
              src="/assets/playground_assets/iphonex-1200w.png"
              image_src="/assets/playground_assets/iphonex-1200w.png"
              class={styles['image12']}
            />
          </div>
        </div>
      </div>
      <div class={styles['footer']}>
        <footer class={styles['container24']}>
          <img
            alt="image"
            src="/assets/playground_assets/logotype-light.svg"
            class={styles['image13']}
          />
          <div class={styles['container25']}>
            <span class={styles['text40']}>About</span>
            <span class={styles['text41']}>Features</span>
            <span class={styles['text42']}>Pricing</span>
            <span class={styles['text43']}>Careers</span>
            <span class={styles['text44']}>Help</span>
            <span class={styles['text45']}>Privacy Policy</span>
          </div>
          <div class={styles['divider2']}></div>
          <div class={styles['container26']}>
            <span class={` ${styles['text46']} ${projectStyles['body2']} `}>
              © 2020 Landify UI Kit. All rights reserved
            </span>
            <div class={styles['container27']}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                class={styles['link4']}
              >
                <div class={styles['container28']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class={styles['icon15']}
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                class={styles['link5']}
              >
                <div class={styles['container29']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class={styles['icon17']}
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                class={styles['link6']}
              >
                <div class={styles['container30']}>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    class={styles['icon19']}
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                class={styles['link7']}
              >
                <div class={styles['container31']}>
                  <svg viewBox="0 0 1024 1024" class={styles['icon21']}>
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
