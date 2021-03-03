using Esprima.Ast;
using System.Threading.Tasks;

namespace Jint.Runtime.Interpreter.Statements
{
    /// <summary>
    /// http://www.ecma-international.org/ecma-262/5.1/#sec-12.7
    /// </summary>
    internal sealed partial class JintContinueStatement : JintStatement<ContinueStatement>
    {
        protected override Task<Completion> ExecuteInternalAsync() => Task.FromResult(ExecuteInternal());
    }
}