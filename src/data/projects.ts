// Public chaosbit-dev projects shown on the landing page. Hand-maintained on purpose:
// add a project here when its repo goes public (see the org publish checklist).

export interface Project {
	name: string;
	repo: string;
	summary: string;
	tags: string[];
}

export const PROJECTS: Project[] = [
	{
		name: 'comlink',
		repo: 'https://github.com/chaosbit-dev/comlink',
		summary:
			'An MCP server for Proton Mail via Proton Mail Bridge. Search, read and organize mail, with allowlists, rate limits and redaction guarding anything that sends.',
		tags: ['MCP', 'Python', 'Proton Mail'],
	},
	{
		name: 'paperless-mcp',
		repo: 'https://github.com/chaosbit-dev/paperless-mcp',
		summary:
			"An MCP server for Paperless-ngx. Find documents and read their extracted fields without ever returning document text, acting as each caller's own Paperless user.",
		tags: ['MCP', 'Python', 'Paperless-ngx'],
	},
	{
		name: 'obsidian-git-mcp',
		repo: 'https://github.com/chaosbit-dev/obsidian-git-mcp',
		summary:
			'An MCP server for an Obsidian vault kept in git. Search, read, edit, move and delete notes the way Obsidian would, keeping links intact and making one commit per change.',
		tags: ['MCP', 'Python', 'Obsidian'],
	},
	{
		name: 'homeassistant-mcp',
		repo: 'https://github.com/chaosbit-dev/homeassistant-mcp',
		summary:
			'An MCP server for Home Assistant. Read states, history and cameras, control devices and manage the registry, with every write behind a fail-closed gate.',
		tags: ['MCP', 'Python', 'Home Assistant'],
	},
];

export const ORG_URL = 'https://github.com/chaosbit-dev';
export const CONTACT_EMAIL = 'hello@chaosbit.dev';
