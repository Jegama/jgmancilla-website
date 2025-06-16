import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { personalDetails } from '@/lib/content-data'; // To bold the author's name

type PaperCitationProps = {
  title: string;
  authors: string[];
  publication: string;
  year: string;
  url: string;
  index: number;
};

export function PaperCitation({ title, authors, publication, year, url, index }: PaperCitationProps) {
  // Function to bold Jesus Mancilla's name
  const formatAuthors = (authorsList: string[]) => {
    return authorsList.map((author, idx) =>
      author.includes(personalDetails.name) ? <strong key={idx}>{author}</strong> : author
    ).reduce((prev, curr, idx) => [prev, (idx > 0 ? ', ' : ''), curr] as any);
  };

  return (
    <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg">
      <CardContent className="p-4">
        <li className="flex flex-col sm:flex-row">
          <span className="sm:mr-2 tabular-nums">{index + 1}.</span>
          <div className="flex-1">
            <Link href={url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
              {title}
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              {formatAuthors(authors)}. ({year}). <em>{publication}</em>.
            </p>
          </div>
        </li>
      </CardContent>
    </Card>
  );
}
