/**
 * Uniform plugin information.
 *
 * The standard path for this resource is `/api/service/info`.
 */
export class Plugin {
  /**
   * Name of the plugin, e.g. "Akita Core", "Robin", etc.
   */
  name: string;

  /**
   * Description, may contain HTML tags, e.g. `<b>`, `<a>` etc.
   */
  description: string;

  /**
   * Semantic version, e.g. "1.0.5".
   *
   * Please, use reflection or similar approach to extract the version.
   */
  version: string;

  /**
   * Optional. URL of documentation.
   */
  helpLink?: string;

  /**
   * Constructor to initialize the Plugin class.
   * @param name - Name of the plugin.
   * @param description - Description of the plugin.
   * @param version - Semantic version of the plugin.
   * @param helpLink - Optional URL of documentation.
   */
  constructor(
    name: string,
    description: string,
    version: string,
    helpLink?: string
  ) {
    this.name = name;
    this.description = description;
    this.version = version;
    this.helpLink = helpLink;
  }
}
