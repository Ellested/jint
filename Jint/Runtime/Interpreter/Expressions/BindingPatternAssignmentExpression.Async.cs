using System.Threading.Tasks;

namespace Jint.Runtime.Interpreter.Expressions
{
    internal sealed partial class BindingPatternAssignmentExpression : JintExpression
    {
        protected override Task<object> EvaluateInternalAsync() => Task.FromResult(EvaluateInternal());
    }
}