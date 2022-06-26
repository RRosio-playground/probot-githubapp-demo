import { Context, Probot } from "probot";
// useful functionality can go here...



export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });

  app.on("issues.labeled", async (context) => {
    const issueComment = context.issue({
      body: "This issue was labeled!",
    });
    await context.octokit.issues.createComment(issueComment);
  });

};
