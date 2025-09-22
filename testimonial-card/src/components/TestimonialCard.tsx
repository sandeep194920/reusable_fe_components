import type { FC, PropsWithChildren } from "react";

interface UserProps {
  name: string;
  handle: string;
  avatar: string;
}

const TestimonialCard: FC<PropsWithChildren<UserProps>> = ({
  name,
  handle,
  avatar,
  children,
}) => {
  return (
    <figure className="bg-white space-y-4 w-85 p-6 rounded-lg">
      <figcaption className="space-x-4 flex items-center">
        <img className="size-12 rounded-full" src={avatar} alt={name} />
        <div className="overflow-hidden">
          <h4 className="text-lg font-semibold text-neutral-900 text-ellipsis whitespace-nowrap overflow-hidden">
            {name}
          </h4>
          <p className="text-sm text-neutral-600 text-ellipsis whitespace-nowrap overflow-hidden">
            {handle}
          </p>
        </div>
      </figcaption>
      <blockquote>
        <p className="text-neutral-600 line-clamp-5">{children}</p>
      </blockquote>
    </figure>
  );
};

export default TestimonialCard;
