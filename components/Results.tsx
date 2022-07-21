import Thumbnail from "./Thumbnail"

interface ResultProps {
    results: any;
}
function Results({ results }: ResultProps) {
    return (
        <div>
            {results.map((result: any) => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    )
}

export default Results