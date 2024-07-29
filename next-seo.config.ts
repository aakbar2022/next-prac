import { DefaultSeoProps } from "next-seo";
const title = 'coins'
const description = 'Next SEO'

export const defaultSeo: DefaultSeoProps = {
    title,
    description,
    openGraph: {
        title,
        description,
        type: "website",
        locale: "en_US",
        url: "https://coin.app",
        siteName: "coins",
        images: [
            {
                url: '/img/meta-tags-image.jpg',
                width: 1200,
                height: 630,
                alt: 'image alt',
            }
        ]
    },
}