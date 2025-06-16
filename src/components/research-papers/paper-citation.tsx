import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

type PaperCitationProps = {
  title: string;
  authors: string[];
  publication: string;
  year: string;
  url: string;
  index: number;
};

// Helper: Robustly bold any author name matching variations of Jesus Garcia-Mancilla
const boldNamePatterns = [
  /jesus garcia-mancilla/i,
  /garcia-mancilla, j\.?/i,
  /garcia mancilla, j\.?/i,
  /garcia-mancilla j\.?/i,
  /garcia-mancilla jesus/i,
  /mancilla, jesus/i,
  /jesus mancilla/i,
  /garcia-mancilla/i,
];

const isMyName = (author: string) => boldNamePatterns.some((pattern) => pattern.test(author));

const formatAuthors = (authorsList: string[]) => {
  return authorsList
    .map((author, idx) =>
      isMyName(author) ? <strong key={idx}>{author}</strong> : author
    )
    .reduce((prev, curr, idx) => [prev, (idx > 0 ? ', ' : ''), curr] as any);
};

export function PaperCitation({ title, authors, publication, year, url, index }: PaperCitationProps) {
  return (
    <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg">
      <CardContent className="p-4">
        <li className="flex flex-col sm:flex-row">
          <span className="sm:mr-2 tabular-nums">{index + 1}.</span>
          <div className="flex-1">
            {url ? (
              <Link href={url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
                {title}
              </Link>
            ) : (
              <span className="font-medium">{title}</span>
            )}
            <p className="text-sm text-muted-foreground mt-1">
              {formatAuthors(authors)}. ({year}). <em>{publication}</em>.
            </p>
          </div>
        </li>
      </CardContent>
    </Card>
  );
}
