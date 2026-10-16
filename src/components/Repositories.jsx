import RepoCard from "./RepoCard";

export default function Repositories () {
    return (

        <>

        <div className="rounded-xl border-2 border-[#222222] p-8">
            <RepoCard 
                name = "portfolio"
                description = "My personal page built with React."
                language = "JavaScript"
                commits = "48 commits" ></RepoCard>

            <RepoCard 
                name = "todo-api"
                description = "A small REST API for a to-do list."
                language = "Java"
                commits = "31 commits" ></RepoCard>

            <RepoCard 
                name = "dotfiles"
                description = "My terminal and editor settings"
                language = "Shell"
                commits = "12 commits" ></RepoCard>
          
        </div>
    </>


    );
}