import Thumbnail from "./Thumbnail"

interface ResultProps {
    results: any;
}
function Results({ results }: ResultProps) {
    return (
        <div className="px-5 mt-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4
    ">
            {results.map((result: any) => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    )
}

export default Results