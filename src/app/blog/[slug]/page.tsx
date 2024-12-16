import { client, urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { fullBlog } from "@/lib/interface";
import Image from "next/image";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  return (
    <div className="mt-16">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Indonesia Islam Psikolog Society - Program
        </span>
        <span className="mt-10 block text-3xl items-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={300}
        height={300}
        alt="Title Image"
        priority
        className="rounded-lg mt-5 border"
      />

      <div className="mt-5 text-left">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
