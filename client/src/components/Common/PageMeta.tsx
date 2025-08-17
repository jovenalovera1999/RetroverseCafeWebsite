import { useEffect } from "react";

interface PageMetaProps {
  title: string;
}

const PageMeta = ({ title }: PageMetaProps) => {
  useEffect(() => {
    document.title = `${title} | Retroverse Cafe`;
  }, [title]);

  return null;
};

export default PageMeta;
