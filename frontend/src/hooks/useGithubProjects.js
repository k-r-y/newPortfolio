import { useState, useEffect } from "react";
import { projectList } from "../constants/data";

export function useGithubProjects() {
  const [projects, setProjects] = useState(projectList);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/k-r-y/repos");
        if (!response.ok) throw new Error("Failed to fetch from GitHub API");
        
        const repos = await response.json();
        
        const updatedProjects = projectList.map(proj => {
          const repo = repos.find(r => r.name === proj.repoName);
          if (repo) {
            // Update stats dynamically from GitHub
            return {
              ...proj,
              Stars: repo.stargazers_count.toString(),
              Views: repo.forks_count.toString(), // Using forks for "views" as GitHub API doesn't expose views
              Updated: new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" }),
              // Optionally update description if it exists on GitHub
              Description: repo.description || proj.Description,
            };
          }
          return proj; // Fallback to original data if not found in fetched repos
        });
        
        setProjects(updatedProjects);
      } catch (err) {
        console.error("Error fetching github projects, using fallback data:", err);
        setError(err);
        // We don't need to do anything else, as the initial state is already the fallback `projectList`
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  return { projects, loading, error };
}
